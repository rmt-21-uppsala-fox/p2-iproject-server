const axios = require('axios');
const { next } = require('cheerio/lib/api/traversing');

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
        return response.data;
    } catch (err) {
        next(err);
    }
};

module.exports = wlnApi;
