```svelte
<script>
  import { onMount } from 'svelte';
  import { interact } from '../../utils/interact.js';
  import { blocks } from '../../store/blocks.js';
  import EditableText from './EditableText.svelte';
  import AdjustableElement from './AdjustableElement.svelte';

  export let block = {};

  onMount(() => {
    interact(`#${block.id}`);
  });
</script>

<div id={block.id} class="block">
  {#each block.elements as element (element.id)}
    {#if element.type === 'text'}
      <EditableText {element} />
    {:else}
      <AdjustableElement {element} />
    {/if}
  {/each}
</div>

<style>
  .block {
    position: relative;
    margin: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
</style>
```