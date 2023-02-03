import { getGifs } from "../../helpers/getGifs";

describe('getGifs testing', ()=> {
    test('it must return an array of gifs', async ()=> {
        const gifs = await getGifs('one piece');

        expect(gifs.length).toBeGreaterThan(0);

        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
});