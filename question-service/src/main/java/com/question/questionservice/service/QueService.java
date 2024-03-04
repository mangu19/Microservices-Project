package com.question.questionservice.service;

import java.util.List;

import com.question.questionservice.entity.Question;

public interface QueService {
    Question create(Question question);
    List<Question> get();
    Question getOne(Long id);
    List<Question> getQuestionsOfQuiz(Long quizId);
}
