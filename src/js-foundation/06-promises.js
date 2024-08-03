const { http } = require("../plugins")

const getPokemonById = async( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`

  const pokemon = await http.get(url)

  // throw new Error('Pokemon no existe')

  return pokemon.name

  // return fetch( url )
  //   .then((resp) => resp.json())
  //   // .then(() => { throw new Error('Pokemon no encontrado') })
  //   .then((pokemon) => pokemon.name)
}

module.exports = {
  getPokemonById,
}