
import React from 'react'
import {ImageList , Container, Typography} from '@mui/material';

export default function Loader() {
  return (
    <Container  maxWidth = "sm" sx = {{ p : 2 , m : 'auto' , my :1 , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}}>
        <img src="assets/loader.gif" alt="" className = 'loader-img' />
        <Typography variant = 'subtitle' sx = {{width : 345 , textAlign :'center' , color : '#A7A7A7', fontSize : '24px' }}>
            Loading some awesome images...
        </Typography>
    </Container>
  )
}
