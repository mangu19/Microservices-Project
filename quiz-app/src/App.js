import './App.css';
import AddQuestion from './components/AddQuestion';
import AddQuiz from './components/AddQuiz';
import Alert from './components/Alert';
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
    <div className=''>
      <BrowserRouter>     
         <Navbar title={{title:'Quiz'}} />
         <Alert alert={{title:'This Alert'}} />
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
