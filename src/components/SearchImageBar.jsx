import React, {useState, useEffect, useContext} from 'react'
import {Box , Typography , IconButton , Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../context/Context';


export default function SearchImageBar() {
  const [input, setInput] = useState("");
  const {fetchInfo, setDataContainer} = useContext(UserContext);

  useEffect(() => {
    const url =  input === '' ? 'https://api.unsplash.com/photos?page=1&per_page=20&client_id=anVXRJ4BFRi40YC8c5q1zhVxwCAP7rVTIY7XLyzMou0'  : `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=anVXRJ4BFRi40YC8c5q1zhVxwCAP7rVTIY7XLyzMou0&query=${input}`;
    const response = fetchInfo(url);
    response.then((data) => setDataContainer(input === '' ? data : data.results));
  }, [input])

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <Box className = 'search-image-bar' sx = {{fontFamily : 'Montserrat' , p:2}}>
    <Typography variant = 'h2' sx = {{fontSize : 32 , fontWeight : 700, my:1 }}>Download High Quality images by creaters</Typography>
    <Typography variant = 'subtitle' sx = {{fontSize : 14 , fontWeight : 500 , my: 1}}>Over 2.4 million+ stock images by our talented community</Typography>
    <Box sx= {{display :'flex' , border : '2px solid #ECECEC' , width  : {xs : '90%' , sm: '600px'} ,height : '40px' ,  bgcolor : '#FAFAFA' , borderRadius : '6px'}}  elevation = {2}>
      <IconButton>
          <SearchIcon size = {20} />
      </IconButton>
      <Input 
        placeholder="Search high resolution Images, categories, wallpapers" 
        variant="outlined"  autoFocus = 'false' fullWidth = "true"
        sx = {{fontWeight : 500 , fontSize : 14 }}
          onChange = {handleChange}
        />
    </Box>
</Box>
  )
}
