const API_KEY = 'Aw5lgaHLYHWtCkqg2Cq7e4aT6AQHZeLc'
const limit = 10
 
export const reqGif = async(categoria) =>{
    try {
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${categoria}&limit=${limit}`)
      const {data} = await resp.json()
     
      const arregloGifs = data.map((gif)=>({
        id: gif.id,
        url: gif.images.original.url
      }))
 
      return arregloGifs
    } catch (err) {
      console.log(err)
    }
  }