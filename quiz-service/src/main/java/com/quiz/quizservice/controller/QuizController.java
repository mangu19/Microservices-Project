package com.quiz.quizservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quiz.quizservice.entity.Quiz;
import com.quiz.quizservice.service.QuizService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {
   private QuizService quizService;

   public QuizController(QuizService quizService){
    this.quizService=quizService;
   } 
  // @CrossOrigin(origins = "http://localhost:3000")
   @PostMapping
   public Quiz create(@RequestBody Quiz quiz){
    return quizService.add(quiz);
   }
   
   @GetMapping
   public List<Quiz> get(){
    return quizService.get();
   }

   @GetMapping("/quizList")
   public List<Quiz> getQuizList() {
       return quizService.getQuizList();
   }
   

   @GetMapping("/{id}")
   public Quiz getOne(@PathVariable Long id){
    return quizService.get(id);
   }

}
