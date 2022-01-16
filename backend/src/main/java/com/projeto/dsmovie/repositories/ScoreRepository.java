package com.projeto.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.dsmovie.entities.Score;
import com.projeto.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
