export const getGifs = async (category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=Qe1Vl2anOyCbhUzF6MRaDuwkJy84JXd3&q=${category}&limit=20`;


    let response = await fetch(url);
    let { data = []} = await response.json();


    const gifs = data.map(img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};