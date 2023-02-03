
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import GifItem from './GifItem';
import Spinner from './Spinner';

export const GifGrid = ({category}) => {


    const {images, isLoading } = useFetchGifs(category);
 
    return(
        <div>
            <h3> {category} </h3>
           
           {isLoading && <Spinner aria-label="spinner"/>}
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


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

