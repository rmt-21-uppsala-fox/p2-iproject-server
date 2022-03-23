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
      const data = {
        "q": "sini dari data",
        "source": "in",
        "target": "en"
    }
      const response = await axios.post('https://deep-translate1.p.rapidapi.com/language/translate/v2',data,{
          headers: {
            "X-RapidAPI-Host":"deep-translate1.p.rapidapi.com",
            "X-RapidAPI-Key":"c0fef51bb8msh61a6c4a018759efp10ffd0jsn392ed844c5a6"
          }
      });
      res.status(201).json(response.data.translations);
    } catch (error) {
      console.error(error);
    }
  }



  module.exports={
    getUser,
    getHomePost,
    postTranslate
  }