package com.quiz.quizservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.quiz.quizservice.entity.Quiz;
import com.quiz.quizservice.repo.QuizRepo;

@Service
public class QuizServiceImpl implements QuizService {

    private QuizRepo quizRepo;
    private QuestionClient questionClient;

    public QuizServiceImpl(QuizRepo quizRepo,QuestionClient questionClient){
        this.quizRepo=quizRepo;
        this.questionClient=questionClient;
    }

    @Override
    public Quiz add(Quiz quiz) {
       return quizRepo.save(quiz);
    }

    @Override
    public List<Quiz> get() {

        List<Quiz>quizs=quizRepo.findAll();
        List<Quiz>newQuizs= new ArrayList<>();
        for(Quiz sQuiz:quizs){
            sQuiz.setQuestions(questionClient.getQuestionQuiz(sQuiz.getId()));
            newQuizs.add(sQuiz);
        }
        return newQuizs;
    }

    @Override
    public Quiz get(Long id) {
        Quiz quiz=quizRepo.findById(id).orElseThrow(()-> new RuntimeException("Quiz Not Found"));
        quiz.setQuestions(questionClient.getQuestionQuiz(quiz.getId()));
        return quiz;
    }
    
}
