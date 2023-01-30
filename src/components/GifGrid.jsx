
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';
import Spinner from './Spinner';

export const GifGrid = ({category}) => {


    const {images, isLoading } = useFetchGifs(category);
 
    return(
        <div>
            <h3> {category} </h3>
           
           {isLoading && <Spinner/>}
           {!isLoading && 
            <div className='card-grid'>
                {
                   images.map((image) => (                       
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>}    
        </div>
    )
};


