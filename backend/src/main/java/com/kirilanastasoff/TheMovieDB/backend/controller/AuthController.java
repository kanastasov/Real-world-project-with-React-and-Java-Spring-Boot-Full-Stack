package com.kirilanastasoff.TheMovieDB.backend.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kirilanastasoff.TheMovieDB.backend.model.ERole;
import com.kirilanastasoff.TheMovieDB.backend.model.Movies;
import com.kirilanastasoff.TheMovieDB.backend.model.Role;
import com.kirilanastasoff.TheMovieDB.backend.model.User;
import com.kirilanastasoff.TheMovieDB.backend.payload.request.SignupRequest;
import com.kirilanastasoff.TheMovieDB.backend.payload.response.MessageResponse;
import com.kirilanastasoff.TheMovieDB.backend.repository.RoleRepository;
import com.kirilanastasoff.TheMovieDB.backend.repository.UserRepository;
import com.kirilanastasoff.TheMovieDB.backend.services.MoviesService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthController {

//	@Autowired
//	AuthenticationManager authManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest request) {
		if (userRepository.existsByUsername(request.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}
		if (userRepository.existsByEmail(request.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already taken!"));

		}

		User user = new User(request.getUsername(), request.getEmail(), request.getPassword());

		Set<String> stringRoles = request.getRole();
		Set<Role> roles = new HashSet<>();

		if (stringRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found!"));
			roles.add(userRole);
		} else {
			stringRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Admin Role not found."));
					roles.add(adminRole);
					break;
				case "mod":
					Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Mod Role not found."));
					roles.add(modRole);
					break;

				case "user":
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: User Role not found."));
					roles.add(userRole);
				}

			});
		}

		user.setRoles(roles);
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("User registered Succesfully!"));
	}

}
