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
@Table(name = "people")
public class People {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "adult")
	private boolean adult;

	@ElementCollection
	@CollectionTable(name = "known_as", joinColumns = @JoinColumn(name = "known_as_id"))
	@Column(name = "also_known_as")
	private List<String> productionCompanies;

	@Column(name = "biography", length= 4092)
	private String biography;

	@Column(name = "birth_day")
	private Date birthDay;

	@Column(name = "death_day")
	private Date deadthDay;

	@Column(name = "image")
	private String image;

	@Column(name = "gender")
	private int gender;

	@Column(name = "homepage")
	private String homepage;

	@Column(name = "the_movie_db_id")
	private Long theMovieDbId;

	@Column(name = "imdb_id")
	private String imdbId;

	@Column(name = "known_for_department")
	private String knownForDepartment;

	@Column(name = "name")
	private String name;

	@Column(name = "place_of_birth")
	private String placeOfBirth;

	@Column(name = "popularity")
	private double popularity;

	@Column(name = "profile_path")
	private String profilePath;

	public People() {
		super();
	}

	public People(boolean adult, List<String> productionCompanies, String biography, Date birthDay, Date deadthDay,
			String image, int gender, String homepage, Long theMovieDbId, String imdbId, String knownForDepartment,
			String name, String placeOfBirth, double popularity, String profilePath) {
		super();
		this.adult = adult;
		this.productionCompanies = productionCompanies;
		this.biography = biography;
		this.birthDay = birthDay;
		this.deadthDay = deadthDay;
		this.image = image;
		this.gender = gender;
		this.homepage = homepage;
		this.theMovieDbId = theMovieDbId;
		this.imdbId = imdbId;
		this.knownForDepartment = knownForDepartment;
		this.name = name;
		this.placeOfBirth = placeOfBirth;
		this.popularity = popularity;
		this.profilePath = profilePath;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isAdult() {
		return adult;
	}

	public void setAdult(boolean adult) {
		this.adult = adult;
	}

	public List<String> getProductionCompanies() {
		return productionCompanies;
	}

	public void setProductionCompanies(List<String> productionCompanies) {
		this.productionCompanies = productionCompanies;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	public Date getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(Date birthDay) {
		this.birthDay = birthDay;
	}

	public Date getDeadthDay() {
		return deadthDay;
	}

	public void setDeadthDay(Date deadthDay) {
		this.deadthDay = deadthDay;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getGender() {
		return gender;
	}

	public void setGender(int gender) {
		this.gender = gender;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public Long getTheMovieDbId() {
		return theMovieDbId;
	}

	public void setTheMovieDbId(Long theMovieDbId) {
		this.theMovieDbId = theMovieDbId;
	}

	public String getImdbId() {
		return imdbId;
	}

	public void setImdbId(String imdbId) {
		this.imdbId = imdbId;
	}

	public String getKnownForDepartment() {
		return knownForDepartment;
	}

	public void setKnownForDepartment(String knownForDepartment) {
		this.knownForDepartment = knownForDepartment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPlaceOfBirth() {
		return placeOfBirth;
	}

	public void setPlaceOfBirth(String placeOfBirth) {
		this.placeOfBirth = placeOfBirth;
	}

	public double getPopularity() {
		return popularity;
	}

	public void setPopularity(double popularity) {
		this.popularity = popularity;
	}

	public String getProfilePath() {
		return profilePath;
	}

	public void setProfilePath(String profilePath) {
		this.profilePath = profilePath;
	}

	@Override
	public String toString() {
		return "People [id=" + id + ", adult=" + adult + ", productionCompanies=" + productionCompanies + ", biography="
				+ biography + ", birthDay=" + birthDay + ", deadthDay=" + deadthDay + ", image=" + image + ", gender="
				+ gender + ", homepage=" + homepage + ", theMovieDbId=" + theMovieDbId + ", imdbId=" + imdbId
				+ ", knownForDepartment=" + knownForDepartment + ", name=" + name + ", placeOfBirth=" + placeOfBirth
				+ ", popularity=" + popularity + ", profilePath=" + profilePath + ", hashCode()=" + hashCode() + "]";
	}

}
