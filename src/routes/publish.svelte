```svelte
<script>
  import { publish } from '$lib/store/publish.js';
  import { onMount } from 'svelte';
  
  let publishedBlocks = [];

  onMount(async () => {
    publishedBlocks = $publish;
  });
</script>

<style>
  .published-site {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>

<div class="published-site">
  {#each publishedBlocks as block (block.id)}
    <div class="block" id={block.id}>
      {@html block.content}
    </div>
  {/each}
</div>
```