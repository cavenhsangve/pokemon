import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data: { name: string; }, index: number) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        };
    });
    
    if (loadedPokemon) {
        return {
            pokemon: loadedPokemon
        };
    };
    
    throw error(404, 'Not found');
}) satisfies PageLoad;
