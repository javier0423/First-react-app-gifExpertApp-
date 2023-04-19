import React from 'react'
import { useState } from 'react'
//import { GifExpertApp } from '../GifExpertApp'
export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(cat => [inputValue, ...cat ])
      setInputValue('')
    }

    //console.log('ll')
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Hello World" />
    </form>
  )
}
