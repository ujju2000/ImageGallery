import React, { useEffect, useState , useContext} from 'react'
import Loader from './Loader';
import {Box, ImageList, Container} from '@mui/material';
import SearchImageBar from './SearchImageBar';
import CardContainer from './CardContainer';
import {UserContext} from '../context/Context';

export default function MainContainer() {
    const [loader , setLoader] = useState(true);
   
    const { dataContainer , setDataContainer, fetchInfo} = useContext(UserContext);
    useEffect(() => {
        const url = 'https://api.unsplash.com/photos?page=1&per_page=20&client_id=anVXRJ4BFRi40YC8c5q1zhVxwCAP7rVTIY7XLyzMou0'
        const result = fetchInfo(url);
        
        result.then((data) => {
            setDataContainer(data);
        }).catch((err) => console.log(err));
        
        setTimeout(() => {
            setLoader(!loader);
        }, 3000);
    },[])

   
  return (
   loader ? <Loader /> : 
   <>   
       <SearchImageBar />
       <Container>
        <ImageList variant = 'masonry' cols = {3} spacing  = {2} gap = {10}>
                {dataContainer.map(data => <CardContainer  data ={data}/>)}
        </ImageList>
       </Container>
   </>
  )
}
