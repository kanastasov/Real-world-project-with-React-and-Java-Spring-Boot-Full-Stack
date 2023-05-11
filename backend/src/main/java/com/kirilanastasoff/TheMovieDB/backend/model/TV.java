package com.kirilanastasoff.TheMovieDB.backend.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "tv")
public class TV {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "poster_path")
	private String posterPath;

	@Column(name = "overview")
	private String overview;

	@ElementCollection
	@CollectionTable(name = "directors_companies_tv", joinColumns = @JoinColumn(name = "tv_director_id"))
	@Column(name = "production_companies_tv")
	private List<String> productionCompaniesTV;
	
	@Column(name = "vote_average")
	private double voteAverage;

	@Column(name = "vote_count")
	private int voteCount;

	@ElementCollection
	@CollectionTable(name = "tv_genres", joinColumns = @JoinColumn(name = "tv_id"))
	@Column(name = "genres")
	private List<String> genres;

	@Column(name = "the_movie_db_id")
	private Long theMovieDbId;

	@Column(name = "original_name")
	private String originalName;
	
	@Column(name = "first_air_date")
	private Date firstAirDate;

	public TV() {
		super();
	}

	public TV(String name, String posterPath, String overview, List<String> productionCompaniesTV, double voteAverage,
			int voteCount, List<String> genres, Long theMovieDbId, String originalName,Date firstAirDate) {
		super();
		this.name = name;
		this.posterPath = posterPath;
		this.overview = overview;
		this.productionCompaniesTV = productionCompaniesTV;
		this.voteAverage = voteAverage;
		this.voteCount = voteCount;
		this.genres = genres;
		this.theMovieDbId = theMovieDbId;
		this.originalName = originalName;
		this.firstAirDate = firstAirDate;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public List<String> getProductionCompanies() {
		return productionCompaniesTV;
	}

	public void setProductionCompanies(List<String> productionCompaniesTV) {
		this.productionCompaniesTV = productionCompaniesTV;
	}

	public double getVoteAverage() {
		return voteAverage;
	}

	public void setVoteAverage(double voteAverage) {
		this.voteAverage = voteAverage;
	}

	public int getVoteCount() {
		return voteCount;
	}

	public void setVoteCount(int voteCount) {
		this.voteCount = voteCount;
	}

	public List<String> getGenres() {
		return genres;
	}

	public void setGenres(List<String> genres) {
		this.genres = genres;
	}

	public Long getTheMovieDbId() {
		return theMovieDbId;
	}

	public void setTheMovieDbId(Long theMovieDbId) {
		this.theMovieDbId = theMovieDbId;
	}

	public String getOriginalName() {
		return originalName;
	}

	public void setOriginalName(String originalName) {
		this.originalName = originalName;
	}
	
	

	public Date getFirstAirDate() {
		return firstAirDate;
	}

	public void setFirstAirDate(Date firstAirDate) {
		this.firstAirDate = firstAirDate;
	}

	@Override
	public String toString() {
		return "TV [id=" + id + ", name=" + name + ", posterPath=" + posterPath + ", overview=" + overview
				+ ", productionCompanies=" + productionCompaniesTV + ", voteAverage=" + voteAverage + ", voteCount="
				+ voteCount + ", genres=" + genres + ", theMovieDbId=" + theMovieDbId + ", originalName=" + originalName + ", firstAirDate=" + firstAirDate
				+ ", hashCode()=" + hashCode() + "]";
	}

}
