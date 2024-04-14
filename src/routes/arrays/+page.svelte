<script lang="ts">
  import { images } from "$lib/data";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />
<section class="px-1 pb-2">
  <div class="pb-2">
    <h1 class="pb-2 text-3xl">Images <span class="font-bold">(Arrays)</span></h1>
    <p class="pb-3 break-words w-72">{$images.join("|")}</p>
    <button
      class="p-1 border border-gray-700 rounded"
      on:click={() => $images.push(Math.random() * 100)}
      >Added random images</button
    >
  </div>
  <button
  class="p-1 border border-gray-700 rounded"
  on:click={() => console.log($images)}>Log Images</button
>
</section>

