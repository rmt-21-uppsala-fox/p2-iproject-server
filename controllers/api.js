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



  module.exports={
    getUser,
    getHomePost
  }