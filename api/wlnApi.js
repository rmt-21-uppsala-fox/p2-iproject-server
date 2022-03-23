const axios = require('axios');

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
        const res = await axios.get('https://www.wlnupdates.com/api', {
            query,
        });
        return res.data;
    } catch (err) {
        res.status(400).json(err.response.data);
    }
};

module.exports = wlnApi;
