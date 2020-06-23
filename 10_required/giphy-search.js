
const URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA";
let globalres;
function search(url, api_key) {

    const queryForm = document.getElementById('search-form');
    let searchTimeout;
    let cache = {};
    const gifsRoot = document.getElementById('gifs-root');

    const getGifs = query => {
        if (Object.keys(cache).includes(query)) {
            console.info('from cache');
            return cache[query];
        }
        return fetch(`${url}?q=${query}&api_key=${api_key}`).then(result => {
            if (result.ok) {
                console.info('from net');
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
            renderGifs(result);
        } catch (e) {
            console.error('Something happend:', e);
        }
    };

    const renderGifs = function (result) {
        gifsRoot.innerHTML = '';
        Array.from(result.data).forEach(el => {
            const url = el.images.fixed_height.url;
            const div = document.createElement('div');
            div.innerHTML = `<img src=${url}/>`;
            gifsRoot.append(div);
        })
    }

    queryForm.addEventListener('input', function (event) {
        clearTimeout(searchTimeout);
        const query = event.target.value;
        searchTimeout = (setTimeout(() => showResult(query), 1000));
    })
}
search(url, api_key);