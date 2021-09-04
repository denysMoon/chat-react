import './App.css';
import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar'
import AppRouter from './components/AppRouter';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: green[500]
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
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
