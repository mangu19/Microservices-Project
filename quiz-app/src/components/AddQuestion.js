import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddQuestion() {
    const [que, setQue] = useState([])
    const [allQuiz, setAllQuiz] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const baseUrl = "http://localhost:8081/quiz/quizList";
    const postUrl = "http://localhost:8082/question";
    useEffect(() => {
        fetchQuizList()
    }, [])

    const fetchQuizList = () => {

        axios.get(baseUrl)
            .then(function (response) {
                setAllQuiz(response.data)
            })
            .catch(function (error) {
                console.log("Error=" + error);
            })

    }

    const postData = async (url = '', data = {}) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors', // Enable CORS
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return await response.json(); // Parse response JSON
        } catch (error) {
            console.error('Error:', error);
            throw error; // Propagate the error
        }
    };

    const handleClick = (e) => {
        //setSelectedQuiz(e.target.value);
        setQue(e.target.value);

        postData(postUrl, { "question": que,"quizId": selectedQuiz })
        .then(data => {
            console.log('Success:', data);
            setQue("");
            // Handle successful response
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });

        
    }
    const handleSelect = (e) => {
        setSelectedQuiz(e.target.value);
        console.log("selected quiz=" + selectedQuiz)
    }

    return (
        <div className='shadow p-3 mb-5 bg-body-tertiary rounded my-3 mx-3' style={{ width: "600px", height: "250px" }} >
            <h2 className='display-6'>Add Question</h2><hr />
            <div className="mb-3">
                <input type="text" name='title' placeholder='type Question here' class="form-control" id="title" onChange={e => setQue(e.target.value)} value={que} />
                
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
