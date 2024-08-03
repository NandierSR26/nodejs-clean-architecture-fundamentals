import { getPokemonById } from "./../../src/js-foundation/06-promises";

describe("js-founding/06-promises", () => {
  it("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  it("Should return an error if pokemon does not exists", async () => {
    const pokemonId = 1000000;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with ID ${pokemonId}`);
    }
  });
});
