const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA"

const getGifs = query => {
    return fetch(`https://api.giphy.com/v1/gifs1/search?q=${query}&api_key=${API_KEY}`).then(result =>{
        if (result.ok){
            return result.json()
        }
        throw new Error(result.status);
    })
};

const showResult = async (query) => {
    try {
        const result = await getGifs(query)
        console.log(result)
    } catch (e) {
        console.error('Something happend:', e);
    }
};
showResult('dog');