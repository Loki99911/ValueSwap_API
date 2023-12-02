const axios= require("axios");
const BASE_URL = process.env.BASE_URL;

axios.defaults.headers.common.x_cg_demo_api_key = process.env.API_KEY; 
  
const listCatalogs = async (req, res) => {
  return axios
    .get(`${BASE_URL}/coins/list`)
    .then(function (response) {
      console.log(response);
      return res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(404).json({ message: error.message });
    });
};

const catalogsInfo = async (req, res) => {
  return axios
    .get(`${BASE_URL}/coins/${req}`)
    .then(function (response) {
      return res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(404).json({ message: error.message });
    });
};

module.exports = {
  listCatalogs: listCatalogs,
  catalogsInfo: catalogsInfo,
};
