<script>
    /**
	 * @type {{ image: any; name: any; id: any; }}
	 */
     export let pokeman;
</script>
<a class="p-6 bg-gray-100 text-gray-8000 text-center rounded-mdshadow-sm hover:shadow-md flex flex-col items-center" href={`/pokeman/${pokeman.id}`}>
   <img src={pokeman.image} alt={pokeman.name}>
   <h2 class="uppercase">{pokeman.id}. {pokeman.name}</h2>
</a>
