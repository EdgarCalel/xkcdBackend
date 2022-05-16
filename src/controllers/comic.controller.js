const axios = require("axios");

const getComicToday =async(req, res)=>{
  const total = await axios.get('http://xkcd.com/info.0.json')
  res.json(total.data)
  }
  const getComicSpecific =async(req, res)=>{
    try {
      const {number} = req.query
      const total = await axios.get(`https://xkcd.com/${number}/info.0.json`)
      res.json(total.data)
    } catch (error) {
      console.log(error)
    }
    }
module.exports = {
    getComicToday,
    getComicSpecific
};