import React from 'react'

export const GifGridItem =({title, url}) => {

    //console.log(id, title, url)

  return (
    <div className='animate__animated animate__bounce'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

