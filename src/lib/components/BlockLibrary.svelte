```svelte
<script>
  import { blocks } from '$lib/store/blocks.js';
  import Draggable from './Draggable.svelte';

  let blockList = $blocks;
</script>

<style>
  .block-library {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-item {
    margin: 10px;
    cursor: move;
  }
</style>

<div id="block-library" class="block-library">
  {#each blockList as block (block.id)}
    <div class="block-item">
      <Draggable id={block.id}>
        <div class="block-content" innerHTML={block.content}></div>
      </Draggable>
    </div>
  {/each}
</div>
```