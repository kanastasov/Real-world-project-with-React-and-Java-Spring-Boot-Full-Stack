package com.kirilanastasoff.TheMovieDB.backend.payload.response;

public class MessageResponse {

	String response;

	
	public MessageResponse(String response) {
		super();
		this.response = response;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	
}
