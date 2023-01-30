import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        setIsLoading(true);
        setTimeout( async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        }, 1000);       
    };

    useEffect( () => { 
        getImages();
    },[]);


    return {         
        images,
        isLoading
    }
};

export default useFetchGifs;