import {useState}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {ThemeProvider , createTheme} from '@mui/material';
import "@fontsource/pattaya";
import "@fontsource/montserrat";
import MainContainer from './components/MainContainer';
import Context from './context/Context';
import { ToggleModeProvider } from './context/theme';

const theme = createTheme({
  typography: {
    fontFamily: ['Pattaya , sans-serif', 'Montserrat'],
  },
  // palette : {
  //   mode : 'dark',
  //   ...(mode === 'light' ? {primary : 'white' , text : { primary : 'black' }} : {primary : 'black' , text : {primary : 'white'}} 
  //   )}, 
  components : {
    MuiButtonBase :{
      defaultProps : {
        disableRipple : true,
      }
    }
  }
});

function App() {
  const [themeMode , setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }
   return (
  
    <ToggleModeProvider value = {{themeMode , lightTheme , darkTheme , setThemeMode}}>
      <ThemeProvider theme = {theme}>
        <Context>
          <div className="App">
            <Navbar />
            <MainContainer/>
          </div>
        </Context>
      </ThemeProvider>
    </ToggleModeProvider>
  );
}

export default App;
