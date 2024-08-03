const { axios } = require("axios")

const httpClient = {

  get: async(url) => {
    // const resp = await fetch(url)
    // const data = await resp.json()
    // return data

    const { data } = await axios.get(url)
    return data
  },
  post: async(url, body) => {},
  put: async(url, body) => {},
  delete: async(url) => {},

}


module.exports = {
  http: httpClient
}