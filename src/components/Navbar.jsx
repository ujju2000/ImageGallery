
import React , {useContext, useState , useEffect} from 'react';
import { Box, Typography , AppBar , Toolbar, Input , IconButton, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon  from '@mui/icons-material/ToggleOn';
import { UserContext } from '../context/Context';
import  useTheme from '../context/theme';
import '../App.css';

const pages = ['Explore' , 'Collection' , 'Community'];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [input , setInput] = useState("");
  const {themeMode , setThemeMode} =  useTheme();
  const {fetchInfo , setDataContainer } = useContext(UserContext);
   useEffect(() => {
    const url =  input === '' ? 'https://api.unsplash.com/photos?page=1&per_page=20&client_id=anVXRJ4BFRi40YC8c5q1zhVxwCAP7rVTIY7XLyzMou0'  : `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=anVXRJ4BFRi40YC8c5q1zhVxwCAP7rVTIY7XLyzMou0&query=${input}`;
    const response = fetchInfo(url);
    response.then((data) => setDataContainer(input === '' ? data : data.results));
  }, [input])

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  const handleClick = () => {
    setToggle(!toggle);
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  return (
    <Box  sx = {{}}>
      <AppBar position ='static' sx  = {{  bgcolor : themeMode === 'light' ? 'white' : 'black', color : themeMode === 'light' ? 'black' : 'white',  fontFamily : 'Montserrat' }}>
        <Toolbar sx = {{   display : 'flex' , justifyContent : 'space-between' ,  alignItems : 'center'}}>  
            <Typography variant = 'h4' sx = {{ fontFamily : 'Pattaya , sans-serif', fontSize : {xs : 15 , md: 30}}}>
                Image Gallery
            </Typography>

            <Box sx= {{display :'flex' , border : '2px solid #ECECEC' , width  :'419px' ,height : '40px'  , borderRadius : '6px' , bgcolor : themeMode ==='light' ? 'inherit' : 'grey'}}  elevation = {2}>
              <IconButton>
                  <SearchIcon size = {20} />
              </IconButton>
              <Input placeholder="Search images here" variant="outlined" fullWidth = 'true' autoFocus = 'false' onChange = {handleChange} sx = {{}}/>
            </Box>

            <Box component= 'div' sx = {{ display : { xs : 'none' , md : 'flex'}}}>
              {
                pages.map(page => <Button key = {page} sx = {{fontSize : '12px' , fontWeight : '700', color : themeMode === 'light' ? 'black' : 'white' , bgcolor : 'inherit'}}>{page}</Button> )
              }
            </Box>
            <IconButton onClick = {handleClick} sx = {{ ":hover" : { bgcolor : 'inherit'}, color : themeMode === 'light' ? 'black' : 'white'}}>
              <Typography variant = 'h6' sx = {{fontSize : '12px', fontWeight : 700}}>Dark Mode</Typography>
                {
                  !toggle ?  <ToggleOffIcon  fontSize = 'large' /> : <ToggleOnIcon fontSize = 'large' />
                }
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>  
  )
}
