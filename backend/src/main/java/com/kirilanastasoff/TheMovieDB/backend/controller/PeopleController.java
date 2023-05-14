package com.kirilanastasoff.TheMovieDB.backend.controller;

import java.util.List;
import java.util.Optional;

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

import com.kirilanastasoff.TheMovieDB.backend.model.People;
import com.kirilanastasoff.TheMovieDB.backend.services.PeopleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PeopleController {

	@Autowired
	private PeopleService peopleService;

	@GetMapping("/people")
	public ResponseEntity<List<People>> getAllPeople() {
		try {
			List<People> people = peopleService.getAllPeople();
			if (people.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(people, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/people/{id}")
	public ResponseEntity<People> getMovieById(@PathVariable("id") Long id) {
		Optional<People> people = peopleService.getPeopleById(id);

		if (people.isPresent()) {
			return new ResponseEntity<People>(people.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<People>(people.get(), HttpStatus.NOT_FOUND);

		}
	}

	@PostMapping("people")
	public ResponseEntity<People> createPeople(@RequestBody People people) {
		try {
			People _people = new People();
			_people.setAdult(people.isAdult());
			_people.setKnownForDepartment(people.getKnownForDepartment());
			_people.setBiography(people.getBiography());
			_people.setBirthDay(people.getBirthDay());
			_people.setDeadthDay(people.getDeadthDay());
			_people.setGender(people.getGender());
			_people.setHomepage(people.getHomepage());
			_people.setTheMovieDbId(people.getTheMovieDbId());
			_people.setImdbId(people.getImdbId());
			_people.setKnownForDepartment(people.getKnownForDepartment());
			_people.setName(people.getName());
			_people.setPlaceOfBirth(people.getPlaceOfBirth());
			_people.setPopularity(people.getPopularity());
			_people.setProfilePath(people.getProfilePath());

			peopleService.savePeople(_people);
			return new ResponseEntity<>(_people, HttpStatus.CREATED);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@PutMapping("/people/{id}")
	public ResponseEntity<People> updatePeople(@PathVariable("id") Long id, @RequestBody People people) {

		Optional<People> _people = peopleService.getPeopleById(id);

		if (_people.isPresent()) {

			_people.get().setAdult(people.isAdult());
			_people.get().setKnownForDepartment(people.getKnownForDepartment());
			_people.get().setBiography(people.getBiography());
			_people.get().setBirthDay(people.getBirthDay());
			_people.get().setDeadthDay(people.getDeadthDay());
			_people.get().setGender(people.getGender());
			_people.get().setHomepage(people.getHomepage());
			_people.get().setTheMovieDbId(people.getTheMovieDbId());
			_people.get().setImdbId(people.getImdbId());
			_people.get().setKnownForDepartment(people.getKnownForDepartment());
			_people.get().setName(people.getName());
			_people.get().setPlaceOfBirth(people.getPlaceOfBirth());
			_people.get().setPopularity(people.getPopularity());
			_people.get().setProfilePath(people.getProfilePath());

			return new ResponseEntity<>(peopleService.savePeople(_people.get()), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}

	}

	@DeleteMapping("/people/{id}")
	public ResponseEntity<HttpStatus> deletePeopleById(@PathVariable("id") Long id) {
		try {
			peopleService.deletePeopleById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@DeleteMapping("/people")
	public ResponseEntity<HttpStatus> deletePeople() {
		try {
			peopleService.delteAllPeople();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

}
