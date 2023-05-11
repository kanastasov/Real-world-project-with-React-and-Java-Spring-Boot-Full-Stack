package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirilanastasoff.TheMovieDB.backend.model.Movies;
import com.kirilanastasoff.TheMovieDB.backend.repository.MoviesRepository;

@Service
public class MoviesServiceImpl implements MoviesService {

	
	@Autowired
	private MoviesRepository moviesRepository;
	
	
	
	@Autowired
	public MoviesServiceImpl(MoviesRepository moviesRepository) {
		super();
		this.moviesRepository = moviesRepository;
	}

	@Override
	public List<Movies> getAllMovies() {
		return this.moviesRepository.findAll();
	}

	@Override
	public Optional<Movies> getMoviesById(Long id) {
		return this.moviesRepository.findById(id);
	}

	@Override
	public List<Movies> findByName(String name) {
		return this.moviesRepository.findByNameContaining(name);
	}

	@Override
	public void deleteMoviesById(Long id) {
		this.moviesRepository.deleteById(id);
		
	}

	@Override
	public void delteAllMovies() {
		this.moviesRepository.deleteAll();		
	}

	
	@Override
	public Movies saveMovies(Movies movies) {
		Movies tempMoviesObj = new Movies();
		tempMoviesObj.setName(movies.getName());
		tempMoviesObj.setImage(movies.getImage());
		tempMoviesObj.setOverview(movies.getOverview());
		tempMoviesObj.setProductionCompanies(movies.getProductionCompanies());
		tempMoviesObj.setUserScore(movies.getUserScore());
		tempMoviesObj.setStatus(movies.getStatus());
		tempMoviesObj.setGenres(movies.getGenres());
		tempMoviesObj.setDuration(movies.getDuration());
		tempMoviesObj.setReleaseDate(movies.getReleaseDate());
		tempMoviesObj.setTheMovieDbId(movies.getTheMovieDbId());
		moviesRepository.save(tempMoviesObj);
		
		return tempMoviesObj;
	}

	@Override
	public List<Movies> findByReleaseDate(Date releaseDate) {
		return this.moviesRepository.findByReleaseDate(releaseDate);
	}
	
}
