import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from "../../hooks/useFetchGifs";

describe('useFetchGifs tests', () => {
    test('must return the state', () => {
        const { result } = renderHook(()=> useFetchGifs('Vinland Saga'));
        const { images, isLoading } = result.current;


        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('it must return an image array and isLoading as false', async ()=> {
        const { result } = renderHook(()=> useFetchGifs('Vinland Saga'));

         await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBe(20);
        expect( isLoading ).toBeFalsy();
    });
});