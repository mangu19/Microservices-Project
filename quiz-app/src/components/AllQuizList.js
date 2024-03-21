import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function AllQuizList() {
    const baseUrl = "http://localhost:8081/quiz";
    const [allQuiz, setAllQuiz] = useState([])

    useEffect(() => {
        fetchQuizList()
        for(let i=0;i<allQuiz.length;i++){
          //  console.log(allQuiz[i].title)
        }
    }, [])

    function fetchQuizList  ()  {

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
             <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allQuiz.map((quiz, key) => {
                    return (
                        <div className="card-container" key={key} style={{ margin: '10px' }}>
                            <div className="card my-3" style={{ width: "18rem" }}>
                                 <div class="card-header">
                                 {quiz.title}
                                </div>
                                <div className="card-body overflow-y-auto" style={{maxHeight:'200px'}}>
                                  
                                    <h6 className="card-subtitle text-body-secondary">Questions</h6><hr style={{marginBottom:'3px'}}/>
                                    {quiz.questions.map((question, key1) => {
                                        return (
                                            <p className="card-text" key={key1}>{question.question}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
