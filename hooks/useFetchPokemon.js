import { urls } from "../constants/constants";

export const useFetchPokemon = async ( dexNum ) => {
    // const resp2 = fetch(`${urls.pokemonPath}/${deluxe}`)
    const response = await fetch(`${urls.pokemonPath}/${dexNum}`)
    const data = await response.json()
    const {name, sprites : { front_default : img} } = data

    console.log('name', name)

    return [
        name,
        img
    ]

    //return data;
}