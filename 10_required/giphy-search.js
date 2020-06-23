const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA"
let query;
const addr = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`
function search(addr) {
    const queryForm = document.getElementById('search-form');
    let searchTimeout;
    let cache = {};

    const getGifs = query => {
        if (Object.keys(cache).includes(query)) {
            return cache[query];
        }
        return fetch(addr).then(result => {
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
            const result = await getGifs(query)
            console.log(result)
        } catch (e) {
            console.error('Something happend:', e);
        }
    };

    queryForm.addEventListener('input', function (event) {
        clearTimeout(searchTimeout);
        const query = event.target.value;
        searchTimeout = (setTimeout(() => showResult(query), 1000));
    })
}
search(addr);