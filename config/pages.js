const fetch = require('node-fetch');

function loadConfig() {
    return fetch(process.env.API_URL ?
        process.env.API_URL + '/pages' :
        'http://localhost:8080/pages')
        .then(result => result.json())
        .then(result => {
            return result
        })
}

exports.loadConfig = loadConfig()