package com.kirilanastasoff.TheMovieDB.backend.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kirilanastasoff.TheMovieDB.backend.model.Movies;

@Repository
public interface MoviesRepository extends JpaRepository<Movies, Long> {
	List<Movies> findByNameContaining(String name);

	List<Movies> findByUserScore(int userScore);

	List<Movies> findByReleaseDate(Date releaseDate);

}
