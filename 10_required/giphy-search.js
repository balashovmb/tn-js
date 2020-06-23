
const URL = 'https://api.giphy.com/v1/gifs/search';
let globalres;
function search(url) {
    const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA"
    const queryForm = document.getElementById('search-form');
    let searchTimeout;
    let cache = {};
    const gifsRoot = document.getElementById('gifs-root');

    const getGifs = query => {
        if (Object.keys(cache).includes(query)) {
            return cache[query];
        }
        return fetch(`${URL}?q=${query}&api_key=${API_KEY}`).then(result => {
            if (result.ok) {
                const resultJSON = result.json();
                cache[query] = resultJSON;
                return resultJSON;
            }
            throw new Error(result.status);
        })
    };

    const showResult = async (query) => {
        try {
            console.log(query);
            const result = await getGifs(query);
            console.log(result);
            globalres = result;
        } catch (e) {
            console.error('Something happend:', e);
        }
    };

    const renderGifs = function (data) {

    }

    queryForm.addEventListener('input', function (event) {
        clearTimeout(searchTimeout);
        const query = event.target.value;
        searchTimeout = (setTimeout(() => showResult(query), 1000));
    })
}
search(URL);