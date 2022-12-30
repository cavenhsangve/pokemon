import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (async ({ params }) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    
    if (pokeman) {
        return {
            pokeman: pokeman
        };
    };
    
    throw error(404, 'Not found');
}) satisfies PageLoad;
