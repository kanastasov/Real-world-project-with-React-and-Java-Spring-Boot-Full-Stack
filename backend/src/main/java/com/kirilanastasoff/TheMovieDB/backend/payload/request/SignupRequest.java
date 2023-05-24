package com.kirilanastasoff.TheMovieDB.backend.payload.request;

import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignupRequest {

	@NotBlank
	@Size(min =3, max = 20)
	private String username;
	
	@NotBlank
	@Email
	@Size(max = 40)
	private String email;
	
	
	@NotBlank
	@Size(min =4, max = 20)
	private String password;
	
	private Set<String> role;

	
	public SignupRequest() {
		super();
	}

	public SignupRequest(@NotBlank @Size(min = 3, max = 20) String username,
			@NotBlank @Email @Size(max = 40) String email, @NotBlank @Size(min = 4, max = 20) String password,
			Set<String> role) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<String> getRole() {
		return role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
	
	
	
	
	
}
