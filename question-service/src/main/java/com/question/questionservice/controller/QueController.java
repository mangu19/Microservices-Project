package com.question.questionservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.question.questionservice.entity.Question;
import com.question.questionservice.service.QueService;

@RestController
@RequestMapping("/question")
public class QueController {

    private QueService queService;
    public QueController(QueService queService){
        this.queService=queService;
    }

    @PostMapping
    public Question create(@RequestBody Question question){
        return queService.create(question);
    }

    @GetMapping
    public List<Question> get(){
        return queService.get();
    }

    @GetMapping("/{queId}")
    public Question getOne(@PathVariable Long queId){
        return queService.getOne(queId);
    }
    
    @GetMapping("/quiz/{quizId}")
    public List<Question> getQuestionsOfQuiz(@PathVariable Long quizId){
        return queService.getQuestionsOfQuiz(quizId);
    }
}
