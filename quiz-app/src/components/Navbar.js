import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><h6 className='display-6'>{props.title}</h6></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                 <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">AllQuizList</Link>
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
