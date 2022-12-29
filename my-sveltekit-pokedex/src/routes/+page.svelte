<script>
    import { pokemon } from "$lib/pokestore";
    import PokemanCard from "$lib/pokemanCard.svelte";
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 upppercase">Svelte Kit Pokedex </h1>

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    {#each $pokemon as pokeman}
        <PokemanCard pokeman={pokeman}/>
    {/each}
</div>

