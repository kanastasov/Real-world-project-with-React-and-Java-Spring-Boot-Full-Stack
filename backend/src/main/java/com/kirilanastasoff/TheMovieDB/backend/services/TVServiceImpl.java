package com.kirilanastasoff.TheMovieDB.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirilanastasoff.TheMovieDB.backend.model.TV;
import com.kirilanastasoff.TheMovieDB.backend.repository.TVRepository;

@Service
public class TVServiceImpl implements TVService {

	@Autowired
	private TVRepository TVRepository;

	@Autowired
	public TVServiceImpl(TVRepository TVRepository) {
		super();
		this.TVRepository = TVRepository;
	}

	@Override
	public List<TV> getAllTV() {
		return this.TVRepository.findAll();
	}

	@Override
	public Optional<TV> getTVById(Long id) {
		return this.TVRepository.findById(id);
	}

	@Override
	public List<TV> findByName(String name) {
		return this.TVRepository.findByNameContaining(name);
	}

	@Override
	public void deleteTVById(Long id) {
		this.TVRepository.deleteById(id);

	}

	@Override
	public void delteAllTV() {
		this.TVRepository.deleteAll();
	}

	@Override
	public TV saveTV(TV TV) {
		TV tempTVObj = new TV();
		tempTVObj.setName(TV.getName());
		tempTVObj.setPosterPath(TV.getPosterPath());
		tempTVObj.setOverview(TV.getOverview());
		tempTVObj.setProductionCompanies(TV.getProductionCompanies());
		tempTVObj.setVoteAverage(TV.getVoteAverage());
		tempTVObj.setVoteCount(TV.getVoteCount());
		tempTVObj.setGenres(TV.getGenres());
		tempTVObj.setTheMovieDbId(TV.getTheMovieDbId());
		tempTVObj.setOriginalName(TV.getOriginalName());
		tempTVObj.setFirstAirDate(TV.getFirstAirDate());

		TVRepository.save(tempTVObj);

		return tempTVObj;
	}

	@Override
	public List<TV> findByFirstAirDate(Date firstAirDate) {
		return this.TVRepository.findByFirstAirDate(firstAirDate);
	}

}
