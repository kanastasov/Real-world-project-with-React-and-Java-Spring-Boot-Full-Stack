package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.kirilanastasoff.TheMovieDB.backend.model.Movies;

public interface MoviesService {

	List<Movies> getAllMovies();
	
	Optional<Movies> getMoviesById(Long id);
	
	List<Movies> findByName(String name);
	
	void deleteMoviesById(Long id);
	
	void delteAllMovies();
	
	Movies saveMovies(Movies movies);
	
	List<Movies> findByReleaseDate(Date releaseDate);
}
