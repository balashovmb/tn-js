const API_KEY = "pjxDakDHEhvolGGtK4DdAGOU0KvCtERA"

const getGifs = query => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`);
        xhr.onload = function () {
            if (xhr.status !== 200) {
                reject(xhr.status);
                return;
            }
            resolve(JSON.parse(xhr.response));
        };
        xhr.send();
    });
};

getGifs('cat').then(value => {
    console.log(value)
    })
    .catch(err => {
        console.error('Something happened', err);
    });
