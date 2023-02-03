import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import GifItem from '../../components/GifItem';


describe('<GifItem/> tests', ()=>{
    test('should match the snapshot', ()=> {
        const image = {title: 'vinland', url: 'https://media4.giphy.com/media/uRb9QFo9ZeMes/giphy.gif?cid=9ca20bfbfyjodd4oplg6io7oi0vj1gqzspmu8yyhx9a01xas&rid=giphy.gif&ct=g'};
        const gifItemComponent = renderer.create(<GifItem {...image}/>); 
        const {container} = render(<GifItem {...image}/>); //with 'render' you get access to all the 
        expect(gifItemComponent).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    });

    test('must show the image with the url and alt indicated', ()=> {
        const image = {title: 'vinland', url: 'https://media4.giphy.com/media/uRb9QFo9ZeMes/giphy.gif?cid=9ca20bfbfyjodd4oplg6io7oi0vj1gqzspmu8yyhx9a01xas&rid=giphy.gif&ct=g'};
        render(<GifItem {...image}/>);
        //screen.debug();
        const {src , alt} = screen.getByRole('img');
        expect( src ).toBe( image.url );
        expect( alt ).toBe( image.title );
    });

    test('must show the title in the component', ()=> {
        let title = 'Saitama';
        let url = 'https://media4.giphy.com/media/11OlEyIaGC6Jsk/giphy.gif?cid=9ca20bfb9qh4kbdpjjdid6pa22a35po551y74uvrfdh0i0gn&rid=giphy.gif&ct=g';
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText( title )).toBeTruthy();
    });
});

