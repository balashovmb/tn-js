const URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA";

function giphySearch(url, api_key) {
    const queryForm = document.getElementById('search-form');
    const gifsRoot = document.getElementById('gifs-root');
    let searchTimeout;
    let cache = {};

    const getGifs = query => {
        if (Object.keys(cache).includes(query)) {
            return cache[query];
        }
        return fetch(`${url}?q=${query}&api_key=${api_key}`).then(result => {
            if (result.ok) {
                const resultJSON = result.json();
                cache[query] = resultJSON;
                return resultJSON;
            }
            throw new Error(result.status);
        });
    };

    const showResult = async (query) => {
        try {
            const result = await getGifs(query);
            renderGifs(result);
        } catch (e) {
            console.error('Something happend:', e);
        }
    };

    const renderGifs = function (result) {
        gifsRoot.innerHTML = '';
        Array.from(result.data).forEach((el, index) => {
            const imgUrl = el.images.fixed_height.url;
            const img = new Image();
            img.src = imgUrl;
            gifsRoot.append(img);
            if ((index + 1) % 4 == 0) {
                const br = document.createElement('br');
                gifsRoot.append(br);
            }
        });
    };

    queryForm.addEventListener('input', function (event) {
        clearTimeout(searchTimeout);
        const query = event.target.value;
        searchTimeout = (setTimeout(() => showResult(query), 500));
    });
}

giphySearch(URL, API_KEY);