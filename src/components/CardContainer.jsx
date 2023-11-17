import { Avatar, Card, CardContent, Typography  , IconButton , CardMedia , Box, ImageListItem } from '@mui/material'
import React , {useState , useContext} from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Popup from './Popup';
import { UserContext } from '../context/Context';

export default function CardContainer({data}) {
    const [url , setUrl] = useState("");
    const {open , setOpen} = useContext(UserContext);
    
    const {id , likes , urls : {regular : imageUrl} } = data;
    const  {first_name , last_name , profile_image : {small : profileImageUrl} , username} = data.user;
    
    const handleClick = (e) => {
      setUrl(e.target.src);
      setOpen(true);
    }
  return (
    <Card key = {id} sx = {{cursor: 'pointer'}} onClick = {handleClick}>
        <ImageListItem
            sx = {{height : 200}}
            // img = {`${imageUrl}&fit=crop&auto=format`}
        >
            <img src ={`${imageUrl}&fit=crop&auto=format}`} />
        </ImageListItem>
        <CardContent sx = {{display : 'flex' ,alignItems : 'center'}}>
            <Avatar src = {profileImageUrl} />
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', ml: 1 }}>

                <Typography variant = 'subtitle' sx ={{fontFamily : 'Montserrat' , fontSize : 12, color : '#4F4F4F' , fontWeight : 700}}> {first_name} {last_name}</Typography>
                <Typography variant = 'body' sx = {{color : 'A7A7A7' , fontSize : 10 , fontWeight : 600 }}>@{username} </Typography>
            </Box>

            <IconButton>
                <ThumbUpOffAltIcon />
                <Typography>{likes}K</Typography>
            </IconButton>
        </CardContent>
        <Popup url = {url}/>  
    </Card>

  )
}
