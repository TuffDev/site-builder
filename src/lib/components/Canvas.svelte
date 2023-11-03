```svelte
<script>
  import { onMount } from 'svelte';
  import { canvas } from '$lib/store/canvas.js';
  import { interact } from '$lib/utils/interact.js';
  import { dragDrop } from '$lib/utils/dragDrop.js';
  import Block from './Block.svelte';

  let canvasElement;

  onMount(() => {
    interact(canvasElement);
    dragDrop(canvasElement);
  });
</script>

<div id="canvas" bind:this={canvasElement}>
  {#each $canvas as block (block.id)}
    <Block {block} />
  {/each}
</div>

<style>
  #canvas {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
```