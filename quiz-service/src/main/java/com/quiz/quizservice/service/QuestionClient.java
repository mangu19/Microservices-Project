package com.quiz.quizservice.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.quiz.quizservice.entity.Question;

@FeignClient(url = "http://localhost:8082",value = "Question-Client")
public interface QuestionClient {
    
    @GetMapping("/question/quiz/{quizId}")
    List<Question> getQuestionQuiz(@PathVariable Long quizId);
}
