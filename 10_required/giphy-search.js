const getGifs = query => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.giphy.com/v1/gif/search?q=${query}`);
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