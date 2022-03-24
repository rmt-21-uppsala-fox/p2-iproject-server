const axios = require('axios')

async function getUser(req,res) {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search?query=traveler&per_page=50',{
          headers: {Authorization:"563492ad6f91700001000001208aada4ab9d4eb3974a44ea037f0e67"}
      });
      res.status(201).json({img:response.data.photos});
    } catch (error) {
      console.error(error);
    }
  }
  async function getHomePost(req,res) {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search?query=traveler&per_page=16',{
          headers: {Authorization:"563492ad6f91700001000001208aada4ab9d4eb3974a44ea037f0e67"}
      });
      res.status(201).json({img:response.data.photos});
    } catch (error) {
      console.error(error);
    }
  }

  async function postTranslate(req,res) {
    try {
      console.log( req.body, 'ini req bodu');
      const qData = req.body.data.q
      const targetdata = req.body.data.target
      // console.log(q,'ini desc');
      // console.log(target,'ini target');
      let options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
          'X-RapidAPI-Key': '5d8cfe2132msh494a9466c4c1a3cp18f087jsn08ba480fa885'
        },
        data: {q: qData, source: 'in', target: targetdata}
      };
      let response = await axios.request(options)

      res.status(201).json(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  module.exports={
    getUser,
    getHomePost,
    postTranslate
  }