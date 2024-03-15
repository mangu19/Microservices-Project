import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function AllQuizList() {
    const baseUrl = "http://localhost:8083/quiz";
    const [allQuiz, setAllQuiz] = useState([])

    useEffect(() => {
        fetchQuizList()
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
                                <p class="card-text">Que1</p>
                              
                            </div>
                        </div>
                    )


                })}



            </div>

        </>
    )
}
