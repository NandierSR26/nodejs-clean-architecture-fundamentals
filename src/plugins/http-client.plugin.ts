import axios from "axios"

export const httpClient = {

  get: async(url: string) => {
    // const resp = await fetch(url)
    // const data = await resp.json()
    // return data

    const { data } = await axios.get(url)
    return data
  },
  post: async(url: string, body: any) => {
    throw new Error('Method not implemented')
  },
  put: async(url: string, body: any) => {
    throw new Error('Method not implemented')
  },
  delete: async(url: string) => {
    throw new Error('Method not implemented')
  },

}