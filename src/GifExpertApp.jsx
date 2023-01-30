import { useState } from "react";
import {AddCategory, GifGrid } from './components';

import { v4 as uuidv4 } from 'uuid';

const GifExpertApp = () => {

    const[categories, setCategories] = useState([]);
   
    const addCategoryHandler = (newCategory) => {


        if(categories.find(category=> category.toLowerCase() === newCategory.toLowerCase())) return;
        
        setCategories(categories=> [...categories,  newCategory])
    };

    return (<>
        {/*title*/}
        <h1> GifExpertApp </h1>

        {/*Searching input*/}
        <AddCategory 
            onNewCategory={addCategoryHandler}
        />

        {/*Gif list*/}

        <ul>
            {
                categories.map(category=> 
                    (
                        <GifGrid key = {uuidv4()} category={category} />
                    )
                )
            }
        </ul>
            {/*Gif item*/}
        
    </>)
};

export default GifExpertApp;