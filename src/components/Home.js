import React from 'react'
import { Carousel } from './Carousel'
import { Grid } from './Grid'
import { Slider } from './Slider'
import {Link} from 'react-router-dom';
import '../estilos/Home.css';

export const Home = () => {
  return (
    <>
      
        <Slider/>
        <Carousel/>
        <Grid/>
        <div className='center'>
              <Link to="/myproc">
                <button className='button'>View all products</button>
              </Link>
        </div>
    </>
  )
}
