import './App.css';
import AddQuestion from './components/AddQuestion';
import AddQuiz from './components/AddQuiz';
import AllQuizList from './components/AllQuizList';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='text-center'>
      <BrowserRouter>     
         <Navbar title="Quiz" />
      {/* <div class="row">
        <div class="col">
          <AddQuiz />
        </div>
        <div class="col">
          <AddQuestion />
        </div>
      </div> */}
      
      


      <Routes>
          <Route path="/addQuiz" element={<AddQuiz />}/> 
          
          
          <Route path="/addQuestion" element={<AddQuestion />}/>
         
          <Route path="/" element={<AllQuizList />}/>
          
        
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
