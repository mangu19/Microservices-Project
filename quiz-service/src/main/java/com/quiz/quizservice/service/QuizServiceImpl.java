package com.quiz.quizservice.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.quiz.quizservice.entity.Quiz;
import com.quiz.quizservice.repo.QuizRepo;

@Service
public class QuizServiceImpl implements QuizService {

    private QuizRepo quizRepo;

    public QuizServiceImpl(QuizRepo quizRepo){
        this.quizRepo=quizRepo;
    }

    @Override
    public Quiz add(Quiz quiz) {
       return quizRepo.save(quiz);
    }

    @Override
    public List<Quiz> get() {
        return quizRepo.findAll();
    }

    @Override
    public Quiz get(Long id) {
        return quizRepo.findById(id).orElseThrow(()-> new RuntimeException("Quiz Not Found"));
    }
    
}
