import './App.css';
import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar'
import AppRouter from './components/AppRouter';

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <NavBar />
          <div className="content">
            <AppRouter />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
