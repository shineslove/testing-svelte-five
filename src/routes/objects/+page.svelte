<script lang="ts">
  import { media } from "$lib/data";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />
<section class="px-1 pb-2">
  <div class="pb-2">
    <h1 class="pb-2 text-3xl">
      Media <span class="font-bold">(Objects)</span>
    </h1>
    <p class="pb-3">{$media.data}</p>
    <button
      class="p-1 border border-gray-700 rounded"
      on:click={() => ($media.data = Math.random() * 100)}
      >Added random media</button
    >
  </div>
  <button
    class="p-1 border border-gray-700 rounded"
    on:click={() => console.log($media)}>Log Media</button
  >
</section>
