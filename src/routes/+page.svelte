<script lang="ts">
  import { Map } from "svelte/reactivity";
  import NavBar from "$lib/components/NavBar.svelte";
  let images: number[] = $state([]);
  const pictures = new Map();
  let media = $state({ data: 0 });
</script>

<NavBar />
<section id="reactivity" class="px-2 py-4">
  <section id="arrays" class="pb-2">
    <div>
      <h1 class="pb-2 text-3xl">Images <span class="font-bold">(Arrays)</span></h1>
      <button
        class="p-1 border border-gray-700 rounded"
        on:click={() => images.push(Math.random() * 100)}>Added Images</button
      >
      <p class="pb-3 break-words w-72">{images.join("|")}</p>
    </div>
  </section>
  <section id="maps" class="pb-2">
    <div>
      <h1 class="pb-2 text-3xl">Pictures <span class="font-bold">(Maps)</span></h1>
      <p class="pb-3">{pictures.get("number")}</p>
      <button
        class="p-1 border border-gray-700 rounded"
        on:click={() => pictures.set("number", Math.random() * 100)}
        >Added Pictures</button
      >
    </div>
  </section>
  <section id="objects">
    <div>
      <h1 class="pb-2 text-3xl">Media <span class="font-bold">(Objects)</span></h1>      
      <p class="pb-3">{media.data}</p>
      <button
        class="p-1 border border-gray-700 rounded"
        on:click={() => (media.data = Math.random() * 100)}>Added Media</button
      >
    </div>
  </section>
</section>
