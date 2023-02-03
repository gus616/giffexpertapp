import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';
describe('<GifExpertApp/> tests', ()=> {
    test('it must match the snapshot', () => {
        const container = render(<GifExpertApp/>);

        expect( container ).toMatchSnapshot();
    });

    test('it must have GifExpertApp in h1', () => {
        render(<GifExpertApp/>);

        expect( screen.getByRole('heading', {level: 1}).innerHTML.toString().trim()).toBe('GifExpertApp');
    });

    test('should add  two different categories if not exists already', ()=> {
        render(<GifExpertApp/>);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Vinland Saga'}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: 'One Piece'}});
        fireEvent.submit(form);
        expect( screen.getAllByRole('heading', {level: 3} ).length).toBe(2);
    });

    test('not to add a category if already exists', ()=> {
        render(<GifExpertApp/>);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');


        fireEvent.input(input, {target: {value: 'Vinland Saga'}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: 'Vinland Saga'}});
        fireEvent.submit(form);

        expect( screen.getAllByRole('heading', {level: 3} ).length).toBe(1);
    });

});