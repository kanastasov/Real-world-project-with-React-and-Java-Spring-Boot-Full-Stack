package com.kirilanastasoff.TheMovieDB.backend.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "movies")
public class Movies {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "image")
	private String image;

	@Column(name = "overview")
	private String overview;

	@ElementCollection
	@CollectionTable(name = "directors_companies", joinColumns = @JoinColumn(name = "director_id"))
	@Column(name = "production_companies")
	private List<String> productionCompanies;

	@Column(name = "user_score")
	private int userScore;

	@Column(name = "status")
	private String status;

	@ElementCollection
	@CollectionTable(name = "movies_genres", joinColumns = @JoinColumn(name = "movies_id"))
	@Column(name = "genres")
	private List<String> genres;

	@Column(name = "duration")
	private int duration;

	@Column(name = "the_movie_db_id")
	private Long theMovieDbId;
	
	@Column(name = "release_date")
	private Date releaseDate;
	
	

	public Movies() {
		super();
	}

	public Movies(String name, String image, String overview, List<String> productionCompanies, int userScore,
			String status, List<String> genres, int duration, Long theMovieDbId, Date releaseDate) {
		super();
		this.name = name;
		this.image = image;
		this.overview = overview;
		this.productionCompanies = productionCompanies;
		this.userScore = userScore;
		this.status = status;
		this.genres = genres;
		this.duration = duration;
		this.theMovieDbId = theMovieDbId;
		this.releaseDate = releaseDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public List<String> getProductionCompanies() {
		return productionCompanies;
	}

	public void setProductionCompanies(List<String> productionCompanies) {
		this.productionCompanies = productionCompanies;
	}

	public int getUserScore() {
		return userScore;
	}

	public void setUserScore(int userScore) {
		this.userScore = userScore;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<String> getGenres() {
		return genres;
	}

	public void setGenres(List<String> genres) {
		this.genres = genres;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public Long getTheMovieDbId() {
		return theMovieDbId;
	}

	public void setTheMovieDbId(Long theMovieDbId) {
		this.theMovieDbId = theMovieDbId;
	}

	
	
	
	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	@Override
	public String toString() {
		return "Movies [id=" + id + ", name=" + name + ", image=" + image + ", overview=" + overview
				+ ", productionCompanies=" + productionCompanies + ", userScore=" + userScore + ", status=" + status
				+ ", genres=" + genres + ", duration=" + duration + ", theMovieDbId=" + theMovieDbId + ", releaseDate="
				+ releaseDate + ", hashCode()=" + hashCode() + "]";
	}



}
