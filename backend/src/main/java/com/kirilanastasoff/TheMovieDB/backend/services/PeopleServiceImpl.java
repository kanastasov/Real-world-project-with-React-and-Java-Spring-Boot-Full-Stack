package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirilanastasoff.TheMovieDB.backend.model.Movies;
import com.kirilanastasoff.TheMovieDB.backend.model.People;
import com.kirilanastasoff.TheMovieDB.backend.repository.MoviesRepository;
import com.kirilanastasoff.TheMovieDB.backend.repository.PeopleRepository;

@Service
public class PeopleServiceImpl implements PeopleService {

	
	@Autowired
	private PeopleRepository peopleRepository;
	
	
	
	@Autowired
	public PeopleServiceImpl(PeopleRepository peopleRepository) {
		super();
		this.peopleRepository = peopleRepository;
	}



	@Override
	public List<People> getAllPeople() {
		return this.peopleRepository.findAll();
	}



	@Override
	public Optional<People> getPeopleById(Long id) {
		return this.peopleRepository.findById(id);
	}



	@Override
	public List<People> findByName(String name) {
		return this.peopleRepository.findByNameContaining(name);
	}



	@Override
	public void deletePeopleById(Long id) {
		this.peopleRepository.deleteById(id);		
	}



	@Override
	public void delteAllPeople() {
		this.peopleRepository.deleteAll();
	}



	@Override
	public People savePeople(People people) {
		People _people = new People();
		_people.setAdult(people.isAdult());
		_people.setKnownForDepartment(people.getKnownForDepartment());
		_people.setBiography(people.getBiography());
		_people.setBirthDay(people.getBirthDay());
		_people.setDeadthDay(people.getDeadthDay());
		_people.setGender(people.getGender());
		_people.setHomepage(people.getHomepage());
		_people.setTheMovieDbId(people.getTheMovieDbId());
		_people.setImdbId(people.getImdbId());
		_people.setKnownForDepartment(people.getKnownForDepartment());
		_people.setName(people.getName());
		_people.setPlaceOfBirth(people.getPlaceOfBirth());
		_people.setPopularity(people.getPopularity());
		_people.setProfilePath(people.getProfilePath());
		
		this.peopleRepository.save(_people);
		return _people;
	}



	@Override
	public List<People> findByBirthDay(Date birthDay) {
		return this.peopleRepository.findByBirthDay(birthDay);
	}

}
