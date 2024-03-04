package com.quiz.quizservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.quizservice.entity.Quiz;

public interface QuizRepo extends JpaRepository<Quiz,Long>{
    
    
}
