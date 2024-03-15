import React, { useState } from 'react';
import axios from 'axios'


export default function AddQuiz() {
  const baseUrl="http://localhost:8083/quiz";
  const conn=axios.create({
    baseURL:baseUrl,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  const [quiz,setQuiz]=useState("")
  
 


  const handleClick=(event)=>{
    event.preventDefault();
    setQuiz(event.target.value)
    console.log("clicked="+quiz);
    try{
        axios.post(baseUrl,{"title":quiz} ,{headers: {"Content-type": "application/json","Access-Control-Allow-Origin": "*"}})
      .then(function (response) {
        if(response.ok){
        return(
          
            console.log("Quiz Saved")
        );
        }
        else{
          return(
            console.log("Error ")
          );
        }  
      })
      .then(
        setQuiz()
      )
      

    }
    catch(e){

    }


  }
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded my-3' style={{width:"600px",height:"250px"}} >
      <h2 className='display-6'>Add Quiz</h2><hr/>
      <div className="form-floating mb-3">
      <input type="text" name='title' class="form-control" id="title" onChange={e=>setQuiz(e.target.value)} value={quiz}/>
      <label htmlFor="floatingInput">Quiz Name</label>
    </div>
    <button type="button" class="btn btn-primary ps-4 pe-4" onClick={handleClick}>Add</button>

      
    </div>
  );
}
