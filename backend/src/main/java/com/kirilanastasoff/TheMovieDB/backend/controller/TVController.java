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

import com.kirilanastasoff.TheMovieDB.backend.model.TV;
import com.kirilanastasoff.TheMovieDB.backend.services.TVService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TVController {

	@Autowired
	private TVService tvService;

	@GetMapping("/tv")
	public ResponseEntity<List<TV>> getAllTV() {
		try {
			List<TV> TV = tvService.getAllTV();
			if (TV.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(TV, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@GetMapping("/tv/{id}")
	public ResponseEntity<TV> getTVById(@PathVariable("id") Long id) {
		Optional<TV> TV = tvService.getTVById(id);

		if (TV.isPresent()) {
			return new ResponseEntity<TV>(TV.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<TV>(TV.get(), HttpStatus.NOT_FOUND);

		}
	}

	@PostMapping("/tv")
	public ResponseEntity<TV> createTV(@RequestBody TV tvObj) {
		try {
			TV tempTVObj = new TV();

			tempTVObj.setName(tvObj.getName());
			tempTVObj.setPosterPath(tvObj.getPosterPath());
			tempTVObj.setOverview(tvObj.getOverview());
			tempTVObj.setProductionCompanies(tvObj.getProductionCompanies());
			tempTVObj.setVoteAverage(tvObj.getVoteAverage());
			tempTVObj.setVoteCount(tvObj.getVoteCount());
			tempTVObj.setGenres(tvObj.getGenres());
			tempTVObj.setTheMovieDbId(tvObj.getTheMovieDbId());
			tempTVObj.setOriginalName(tvObj.getOriginalName());
			tempTVObj.setFirstAirDate(tvObj.getFirstAirDate());

			tvService.saveTV(tempTVObj);
			return new ResponseEntity<>(tempTVObj, HttpStatus.CREATED);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@PutMapping("/tv/{id}")
	public ResponseEntity<TV> updateTV(@PathVariable("id") Long id, @RequestBody TV tvObj) {

		Optional<TV> tempTVObj = tvService.getTVById(id);

		if (tempTVObj.isPresent()) {

			tempTVObj.get().setName(tvObj.getName());
			tempTVObj.get().setPosterPath(tvObj.getPosterPath());
			tempTVObj.get().setOverview(tvObj.getOverview());
			tempTVObj.get().setProductionCompanies(tvObj.getProductionCompanies());
			tempTVObj.get().setVoteAverage(tvObj.getVoteAverage());
			tempTVObj.get().setVoteCount(tvObj.getVoteCount());
			tempTVObj.get().setGenres(tvObj.getGenres());
			tempTVObj.get().setTheMovieDbId(tvObj.getTheMovieDbId());
			tempTVObj.get().setOriginalName(tvObj.getOriginalName());
			tempTVObj.get().setFirstAirDate(tvObj.getFirstAirDate());

			return new ResponseEntity<>(tvService.saveTV(tempTVObj.get()), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}

	}

	@DeleteMapping("/tv/{id}")
	public ResponseEntity<HttpStatus> deleteTVById(@PathVariable("id") Long id) {
		try {
			tvService.deleteTVById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@DeleteMapping("/tv")
	public ResponseEntity<HttpStatus> deleteTV() {
		try {
			tvService.delteAllTV();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

}
