import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import AddCategory from './components/AddCategory';
export const GifExpertApp = () => {

//    const categories = ['Naruto', 'Death Note', 'Haikyuu!']

const [categories, setCategories] = useState(['Death Note']);

    //  const handleAdd = () => {
    // //     //setcategories ([...categories, 'Bleach'])
    //      setCategories (cat => [...cat, 'Bleach'])
    //  }

  return (
    <>


        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar serie</button> */}

        <ol>
            {
                categories.map(category => 
                    <GifGrid
                        key={category}
                        category={category} 
                    />
                )    
            }
        </ol>
    </>
  )
}
