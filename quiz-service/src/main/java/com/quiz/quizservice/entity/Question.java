package com.quiz.quizservice.entity;


import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Question {

   
    private Long id;
    private String question;
    private Long quizId;
}
