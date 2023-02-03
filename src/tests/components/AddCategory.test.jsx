import { render, screen, fireEvent } from '@testing-library/react';

import {jest} from '@jest/globals'
import { AddCategory } from "../../components/AddCategory";

describe('Test <AddCategory/>', ()=> {
    test('it should change the value of the textbox', ()=> {
        render(<AddCategory onNewCategory={()=> {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: {value: 'Vinland Saga'}});


        expect( input.value ).toBe('Vinland Saga');
    });


    test('it should change onNewCategory if input has a value', () => {
        const inputValue = 'One Piece';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}});
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test("it shouldn't call onNewCategory if input has no value", ()=> {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');


        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //expect( onNewCategory ).not.toHaveBeenCalled();
    });

   
});