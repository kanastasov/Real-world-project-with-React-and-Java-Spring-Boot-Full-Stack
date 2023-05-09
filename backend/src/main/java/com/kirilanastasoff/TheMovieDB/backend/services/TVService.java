package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kirilanastasoff.TheMovieDB.backend.model.TV;

@Service
public interface TVService {

	List<TV> getAllTV();
	
	Optional<TV> getTVById(Long id);
	
	List<TV> findByName(String name);
	
	void deleteTVById(Long id);
	
	void delteAllTV();
	
	TV saveTV(TV TV);
	
	List<TV> findByFirstAirDate(Date firstAirDate);
}
