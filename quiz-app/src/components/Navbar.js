import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar({title}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><h6 className='display-6'>{title.title}</h6></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                 <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">AllQuizList</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/addQuiz">Add Quiz</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/addQuestion">Add Question</Link>
                </li>
        
            </ul>
        </div>
        </div>
    </nav>
    </>
  )
}
