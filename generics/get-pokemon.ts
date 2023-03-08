

import axios from 'axios'
import { Pokemon } from '../interfaces';




export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => {

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
    return data;
}

// getPokemon(1)
//         .then( res => console.log(res))
//         .catch( err => console.log(err))
//         .finally( () => console.log('Fin get pokemon'));
