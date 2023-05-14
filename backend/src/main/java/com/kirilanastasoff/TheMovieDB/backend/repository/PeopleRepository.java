package com.kirilanastasoff.TheMovieDB.backend.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kirilanastasoff.TheMovieDB.backend.model.People;

@Repository
public interface PeopleRepository extends JpaRepository<People, Long> {
	List<People> findByNameContaining(String name);

	List<People> findByHomepage(String homepage);

	List<People> findByBirthDay(Date birthDay);

}
