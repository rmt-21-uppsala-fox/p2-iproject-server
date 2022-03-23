const cheerio = require('cheerio');
const axios = require('axios');
const res = require('express/lib/response');

const ScrapeChapter = async (title, chapter) => {
    try {
        const routes = `https://boxnovel.com/novel/${title}/${chapter}`;
        const result = await axios.get(routes);
        const $ = cheerio.load(result.data);
        const content = $('.entry-content').find('.reading-content').find('p');
        const chapterContent = [];
        content.each((i, el) => {
            chapterContent.push($(el).text());
        });
        return chapterContent;
    } catch (err) {
        res.status(400).json(err.response.data);
    }
};

const ScrapeDetail = async (title) => {
    try {
        const routes = `https://boxnovel.com/novel/${title}`;
        const detailContent = {};

        const result = await axios.get(routes);
        const $ = cheerio.load(result.data);
        const content = $('.summary_content')
            .find('.post-content')
            .find('.post-content_item');

        content.each((i, el) => {
            const key = $(el)
                .find('.summary-heading')
                .text()
                .replace(/(\r\n|\n|\r|\t)/gm, '');
            const value = $(el)
                .find('.summary-content')
                .text()
                .replace(/(\r\n|\n|\r|\t)/gm, '');
            detailContent[key] = value;
        });

        const imgContent = $('.summary_image').find('img').attr('src');
        detailContent.imgContent = imgContent;

        const descriptionSummary = $('.description-summary')
            .find('p')
            .text()
            .replace(/(\r\n|\n|\r|\t)/gm, '');
        detailContent.descriptionSummary = descriptionSummary;
        return detailContent;
    } catch (err) {
        res.status(400).json(err.response.data);
    }
};

const ScrapeListGenre = async (genre, order) => {
    try {
        let routes = `https://boxnovel.com/manga-genre/`;
        if (genre === ':genre') {
            routes += 'adventure';
        } else {
            routes += `${genre}`;
        }
        if (order) {
            routes += `/?m_orderby=${order}`;
        }

        let novelList = [];
        const result = await axios.get(routes);
        const $ = cheerio.load(result.data);

        const contents = $('.page-content-listing')
            .find('.page-listing-item')
            .find('.page-item-detail');

        contents.each((i, el) => {
            const title = $(el)
                .find('.item-summary')
                .find('.post-title')
                .text()
                .replace(/(\r\n|\n|\r|\t)/gm, '')
                .trim();
            const link = $(el)
                .find('.item-summary')
                .find('.post-title')
                .find('a')
                .attr('href');
            const imgContent = $(el).find('img').attr('src');
            const rating = $(el)
                .find('.rating')
                .text()
                .replace(/(\r\n|\n|\r|\t|\s)/gm, '');
            const listChapter = $(el)
                .find('.list-chapter')
                .text()
                .replace(/(\r\n|\n|\r|\t)/gm, '')
                .trim();
            novelList.push({
                title,
                link,
                imgContent,
                rating,
                listChapter,
            });
        });

        return novelList;
    } catch (err) {
        res.status(400).json(err.response.data);
    }
};

module.exports = {
    ScrapeChapter,
    ScrapeDetail,
    ScrapeListGenre,
};

// third party api, firestore
// third party api, auth, firebase

/*

1. firebase auth di bawa ke server
2. firestore bookmark
3. ini 




*/
