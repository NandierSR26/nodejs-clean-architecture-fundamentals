import { http } from "../plugins"

export const getPokemonById = async( id: number | string ): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
    const pokemon = await http.get(url)
    return pokemon.name
  } catch (error) {
    throw `Pokemon not found with ID ${ id }`
  }

  // return fetch( url )
  //   .then((resp) => resp.json())
  //   // .then(() => { throw new Error('Pokemon no encontrado') })
  //   .then((pokemon) => pokemon.name)
}
