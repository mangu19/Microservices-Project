import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function AllQuizList() {
    const baseUrl = "http://localhost:8083/quiz";
    const [allQuiz, setAllQuiz] = useState([])

    useEffect(() => {
        fetchQuizList()
        for(let i=0;i<allQuiz.length;i++){
            console.log(allQuiz[i].title)
        }
    }, [])

    const fetchQuizList = () => {

        axios.get(baseUrl)
            .then(function (response) {
                setAllQuiz(response.data)
            }

            )
            .catch(function (error) {
                console.log("Error=" + error);
            })

    }

    return (
        <>
            <div className='container'>
                {allQuiz.map((quiz, key) => {
                    return (
                        <div class="card my-3" style={{width: "18rem;"}} key={key}>
                            <div class="card-body">
                                <h5 class="card-title">{quiz.title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Questions</h6>
                                {quiz.questions.map((question,key1)=>{
                                    return(
                                        <p class="card-text" key={key1}>{question.question}</p>
                                    )
                                }

                                )}
                                
                              
                            </div>
                        </div>
                    )


                })}



            </div>

        </>
    )
}
