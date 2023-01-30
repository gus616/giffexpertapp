import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState('');


   const inputOnChangeHandler = (e) => {
        setInputValue(e.target.value);
   };

   const onSubmitHandler = (e) => {
    e.preventDefault();

    if(inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
   }


   return (
    <form onSubmit={onSubmitHandler}>
        <input 
                type= "text"
                value={inputValue}
                onChange={inputOnChangeHandler}
                placeholder="search gif..."
            />
    </form>    
   );
};
