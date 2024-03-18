import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddQuestion() {
    const [que, setQue] = useState([])
    const [allQuiz, setAllQuiz] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const baseUrl = "http://localhost:8083/quiz/quizList";

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
    const handleClick = (e) => {
        
    }
    const handleSelect = (e) => {
        setSelectedQuiz(e.target.value);
        console.log("selected quiz=" + selectedQuiz)
    }

    return (
        <div className='shadow p-3 mb-5 bg-body-tertiary rounded my-3 mx-3' style={{ width: "600px", height: "250px" }} >
            <h2 className='display-6'>Add Question</h2><hr />
            <div className="form-floating mb-3">
                <input type="text" name='title' class="form-control" id="title" onChange={e => setQue(e.target.value)} value={que} />
                <label htmlFor="floatingInput">Question</label>
            </div>
            <div class="row">
                <div class="col">
                    <select class="form-select" aria-label="Select Quiz" >
                        <option selected>Select Quiz</option>
                        {allQuiz.map((quiz, key) => {
                            return (<option key={key} value={quiz.id} onClick={handleSelect}>{quiz.title}</option>)
                        })}
                    </select>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary ps-4 pe-4" onClick={handleClick}>Add</button>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
