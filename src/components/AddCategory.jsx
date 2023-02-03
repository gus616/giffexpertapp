import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState('');


   const inputOnChangeHandler = (e) => {
        setInputValue(e.target.value);
   };

   const onSubmitHandler = (e) => {

    e.preventDefault();

    if(inputValue.trim().length <= 1) return;

   
    setInputValue('');
    onNewCategory( inputValue.trim() );
   }


   return (
    <form aria-label="form" onSubmit={onSubmitHandler}>
        <input 
                type= "text"
                value={inputValue}
                onChange={inputOnChangeHandler}
                placeholder="search gif..."
            />
    </form>    
   );


};


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
