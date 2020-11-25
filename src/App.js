import NavBar from './components/NavBar';
import WordBlockContainer from './components/WordBlockContainer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <WordBlockContainer />
    </div>
  );
}

export default App;
