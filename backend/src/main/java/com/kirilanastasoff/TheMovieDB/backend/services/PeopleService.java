package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kirilanastasoff.TheMovieDB.backend.model.People;
@Service
public interface PeopleService {

	List<People> getAllPeople();
	
	Optional<People> getPeopleById(Long id);
	
	List<People> findByName(String name);
	
	void deletePeopleById(Long id);
	
	void delteAllPeople();
	
	People savePeople(People People);
	
	List<People> findByBirthDay(Date birthDay);
}
