const axios = require('axios');

function simpleStringify(object) {
    var simpleObject = {};
    for (var prop in object) {
        if (!object.hasOwnProperty(prop)) {
            continue;
        }
        if (typeof object[prop] == 'object') {
            continue;
        }
        if (typeof object[prop] == 'function') {
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
}

const wlnApi = async () => {
    try {
        const data = [
            'lord of mysteries',
            'renegade immortal',
            'kings avatar',
            'legendary moonlight sculptor',
            'daoist gu',
        ];
        let query = {
            mode: 'search-advanced',
            'sort-mode': 'update',
            'chapter-limits': [40, 0],
            'include-results': ['description', 'rating'],
            'title-search-text': 'lord of mysteries',
        };
        query['title-search-text'] = data[Math.floor(Math.random() * 5)];

        const response = await axios.post(
            'https://www.wlnupdates.com/api',
            query
        );
        console.log(response.data);
        return response.data;
    } catch (err) {
        res.status(400).json(err.response.data);
    }
};

module.exports = wlnApi;
