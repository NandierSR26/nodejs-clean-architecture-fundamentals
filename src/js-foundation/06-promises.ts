const { http } = require("../plugins")

export const getPokemonById = async( id: number | string ): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
  const pokemon = await http.get(url)
  return pokemon.name

  // return fetch( url )
  //   .then((resp) => resp.json())
  //   // .then(() => { throw new Error('Pokemon no encontrado') })
  //   .then((pokemon) => pokemon.name)
}
