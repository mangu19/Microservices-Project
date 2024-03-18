package com.quiz.quizservice.service;

import java.util.List;

import com.quiz.quizservice.entity.Quiz;

public interface QuizService {
    Quiz add(Quiz quiz);
    List<Quiz> get();
    Quiz get(Long id);
    List<Quiz> getQuizList();
}
