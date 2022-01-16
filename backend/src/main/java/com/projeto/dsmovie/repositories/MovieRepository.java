package com.projeto.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
