package com.question.questionservice.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.question.questionservice.entity.Question;

public interface QueRepo extends JpaRepository<Question,Long>{

    List<Question> findByQuizId(Long quizId);
    
}
