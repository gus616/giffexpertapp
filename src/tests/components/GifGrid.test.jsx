import { render, screen} from '@testing-library/react';

import { GifGrid } from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid/> tests', ()=> {

    test('it should show items when images are loaded with useFetchGifs ', ()=> {

        const gifs = [
            {
                id: '123',
                title: 'Vinland jpg',
                url: "https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9ca20bfbv2q0h85qmo0mwb2i3bpjm3okkgdlk57lozcomh1k&rid=giphy.gif&ct=g",
            },
            {
                id:'4354',
                title: 'goku dsfnds',
                url: 'https://google.com.mx'
            }
        ];

        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading: false
        });

        render(<GifGrid category={'Vinland Saga'}/>);
        screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
    });


/*     it('testing GifGrid', ()=> {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        });

        render(<GifGrid category={'Vinland Saga'}/>);
        expect(screen).toMatchSnapshot();

    });   */  
});