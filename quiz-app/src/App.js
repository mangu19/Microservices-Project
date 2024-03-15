import './App.css';
import AddQuiz from './components/AddQuiz';
import AllQuizList from './components/AllQuizList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='text-center'>
      <Navbar title="Add Quiz" />
      <div style={{display:"flex"}} >
        <AddQuiz />
        <AllQuizList />
      </div>
    </div>
  );
}

export default App;
