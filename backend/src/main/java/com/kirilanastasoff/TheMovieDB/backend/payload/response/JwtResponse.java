package com.kirilanastasoff.TheMovieDB.backend.payload.response;

import java.util.List;

import com.kirilanastasoff.TheMovieDB.backend.model.ERole;

public class JwtResponse {
	private String token;
	private final String TYPE = "Bearer";
	private Long id;
	private String username;
	private String email;
	private List<ERole> roles;

	public JwtResponse(String token,  Long id,  String username, String email, List roles2) {
		super();
		this.token = token;
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles2;
	}




	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return TYPE;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public List<ERole> getRoles() {
		return roles;
	}

	public void setRoles(List<ERole> roles) {
		this.roles = roles;
	}

}
