import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category);

  console.log(loading)


  return (

    <>

      {loading && <p>Loading</p>}

     <div className='animate__animated animate__flash'>
         <h3>{category}</h3>
           {
            images.map( img => (
              <GifGridItem
              key={img.id}
              {...img}
              />
            ))
          }
    </div>

    </>
  )
}
