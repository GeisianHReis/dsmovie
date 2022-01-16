package com.projeto.dsmovie.dto;

public class ScoreDTO {

	private Long movieI;
	private String email;
	private Double score;
	
	
	public Long getMovieId() {
		return movieI;
	}
	public void setMovieId(Long movieI) {
		this.movieI = movieI;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	
	
}
