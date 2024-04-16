<script lang="ts">
    import { Map } from "svelte/reactivity";
    const pictures = new Map();
</script>
{#snippet navbar()}
<nav class="py-2 px-1">
    <a class="pr-2 text-blue-600 underline" href="/arrays"> Arrays</a>
    <a class="pr-2 text-blue-600 underline" href="/maps"> Maps</a>
    <a class="pr-2 text-blue-600 underline" href="/objects"> Object</a>
    <a class="pr-2 text-blue-600 underline" href="/snips"> Snippets</a>
    <a class="pr-2 font-extrabold underline" href="/"> Svelte 5</a>
</nav>
{/snippet}

{@render navbar()}
<section class="px-1 pb-2">
    <div class="pb-2">
      <h1 class="pb-2 text-3xl">
        Pictures <span class="font-bold">(Snippets)</span>
      </h1>
      <p class="pb-3">{pictures.get("number")}</p>
      <button
        class="p-1 border border-gray-700 rounded"
        onclick={() => pictures.set("number", Math.random() * 100)}
        >Added random pictures</button
      >
    </div>
    <button
      class="p-1 border border-gray-700 rounded"
      onclick={() => console.log(pictures.get("number"))}>Log Pictures</button
    >
</section>
