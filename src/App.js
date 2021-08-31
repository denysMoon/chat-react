import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/Navbar'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
