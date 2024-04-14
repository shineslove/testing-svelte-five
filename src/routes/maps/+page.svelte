<script lang="ts">
  import { pictures } from "$lib/data";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />
<section class="px-1 pb-2">
  <div class="pb-2">
    <h1 class="pb-2 text-3xl">
      Pictures <span class="font-bold">(Maps)</span>
    </h1>
    <p class="pb-3">{$pictures.get("number")}</p>
    <button
      class="p-1 border border-gray-700 rounded"
      on:click={() => $pictures.set("number", Math.random() * 100)}
      >Added random pictures</button
    >
  </div>
  <button
    class="p-1 border border-gray-700 rounded"
    on:click={() => console.log($pictures)}>Log Pictures</button
  >
</section>
