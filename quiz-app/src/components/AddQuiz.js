import React, { useState } from 'react';
import Navbar from './Navbar';

export default function AddQuiz() {
  const baseUrl="http://localhost:8081/quiz";
  Navbar.apply('')
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
  const [quiz,setQuiz]=useState("")
  
  const handleClick = async (event) => {
    event.preventDefault();

    postData(baseUrl, { "title": quiz })
    .then(data => {
        console.log('Success:', data);
        setQuiz("");
        // Handle successful response
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
    


    // try {
    //     const response = await axios.post(baseUrl, { "title": quiz });
    //     if (response.status === 200) {
    //         console.log("Quiz Saved");
    //         setQuiz("");
    //     } else {
    //         console.log("Error");
    //     }
    // } catch (error) {
    //     console.error("Error:", error);
    // }
  };
 return (
    <div className='text-center position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded my-3 mx-3' style={{width:"600px",height:"250px"}} >
      <h2 className='display-6'>Add Quiz</h2><hr/>
      <div className="mb-3">
      <input type="text" name='title' placeholder='type Quiz here' class="form-control" id="title" onChange={e=>setQuiz(e.target.value)} value={quiz}/>
      
    </div>
    <button type="button" class="btn btn-primary ps-4 pe-4" onClick={handleClick}>Add</button>

      
    </div>
  );
}
