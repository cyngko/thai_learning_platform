import NavBar from './components/NavBar';
import AppContent from './components/AppContent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <AppContent />
    </div>
  );
}

export default App;
