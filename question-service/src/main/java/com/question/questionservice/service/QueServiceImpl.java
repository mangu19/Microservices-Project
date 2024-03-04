package com.question.questionservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.question.questionservice.entity.Question;
import com.question.questionservice.repo.QueRepo;

@Service
public class QueServiceImpl implements QueService {

    private QueRepo queRepo;

    public QueServiceImpl(QueRepo queRepo){
        this.queRepo=queRepo;
    }

    @Override
    public Question create(Question question) {
       return queRepo.save(question);
    }

    @Override
    public List<Question> get() {
       return queRepo.findAll();
    }

    @Override
    public Question getOne(Long id) {
       return queRepo.findById(id).orElseThrow(()-> new RuntimeException("Question Not found"));
    }

    @Override
    public List<Question> getQuestionsOfQuiz(Long quizId) {
       return queRepo.findByQuizId(quizId);
    }
    
}
