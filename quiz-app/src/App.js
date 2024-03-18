import './App.css';
import AddQuestion from './components/AddQuestion';
import AddQuiz from './components/AddQuiz';
import AllQuizList from './components/AllQuizList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-center'>
      <Navbar title="Add Quiz" />
      <div class="row">
        <div class="col">
          <AddQuiz />
        </div>
        <div class="col">
          <AddQuestion />
        </div>
      </div>
      
      <AllQuizList />

    </div>
  );
}

export default App;
