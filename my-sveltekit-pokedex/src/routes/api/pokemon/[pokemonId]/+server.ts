import type { RequestHandler } from "./$types";

export const GET = (async ({params}) => {

    const pokemonId = params.pokemonId;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return new Response(JSON
        .stringify(pokemon),
        {status: 200});
}) satisfies RequestHandler;