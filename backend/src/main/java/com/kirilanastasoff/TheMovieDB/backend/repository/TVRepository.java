package com.kirilanastasoff.TheMovieDB.backend.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kirilanastasoff.TheMovieDB.backend.model.TV;

@Repository
public interface TVRepository extends JpaRepository<TV, Long> {
	List<TV> findByNameContaining(String name);

	List<TV> findByVoteAverage(int voteAverage);

	List<TV> findByFirstAirDate(Date firstAirDate);

}
