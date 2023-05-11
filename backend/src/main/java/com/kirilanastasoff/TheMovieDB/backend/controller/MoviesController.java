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

import com.kirilanastasoff.TheMovieDB.backend.model.Movies;
import com.kirilanastasoff.TheMovieDB.backend.services.MoviesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MoviesController {

	@Autowired
	private MoviesService moviesService;

	@GetMapping("/movies")
	public ResponseEntity<List<Movies>> getAllMovies() {
		try {
			List<Movies> movies = moviesService.getAllMovies();
			if (movies.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(movies, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/movies/{id}")
	public ResponseEntity<Movies> getMovieById(@PathVariable("id") Long id) {
		Optional<Movies> movies = moviesService.getMoviesById(id);

		if (movies.isPresent()) {
			return new ResponseEntity<Movies>(movies.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<Movies>(movies.get(), HttpStatus.NOT_FOUND);

		}
	}

	@PostMapping("/movies")
	public ResponseEntity<Movies> createMovies(@RequestBody Movies movies) {
		try {
			Movies _movie = new Movies();
			_movie.setName(movies.getName());
			_movie.setImage(movies.getImage());
			_movie.setOverview(movies.getOverview());
			_movie.setProductionCompanies(movies.getProductionCompanies());
			_movie.setUserScore(movies.getUserScore());
			_movie.setStatus(movies.getStatus());
			_movie.setGenres(movies.getGenres());
			_movie.setDuration(movies.getDuration());
			_movie.setTheMovieDbId(movies.getTheMovieDbId());
			_movie.setReleaseDate(movies.getReleaseDate());

			moviesService.saveMovies(_movie);
			return new ResponseEntity<>(_movie, HttpStatus.CREATED);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@PutMapping("/movies/{id}")
	public ResponseEntity<Movies> updateMovies(@PathVariable("id") Long id, @RequestBody Movies movies) {

		Optional<Movies> _movie = moviesService.getMoviesById(id);

		if (_movie.isPresent()) {

			_movie.get().setName(movies.getName());
			_movie.get().setImage(movies.getImage());
			_movie.get().setOverview(movies.getOverview());
			_movie.get().setProductionCompanies(movies.getProductionCompanies());
			_movie.get().setUserScore(movies.getUserScore());
			_movie.get().setStatus(movies.getStatus());
			_movie.get().setGenres(movies.getGenres());
			_movie.get().setDuration(movies.getDuration());
			_movie.get().setTheMovieDbId(movies.getTheMovieDbId());
			_movie.get().setReleaseDate(movies.getReleaseDate());

			return new ResponseEntity<>(moviesService.saveMovies(_movie.get()), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}

	}

	@DeleteMapping("/movies/{id}")
	public ResponseEntity<HttpStatus> deleteMoviesById(@PathVariable("id") Long id) {
		try {
			moviesService.deleteMoviesById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	
	@DeleteMapping("/movies")
	public ResponseEntity<HttpStatus> deleteMovies() {
		try {
			moviesService.delteAllMovies();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

}
