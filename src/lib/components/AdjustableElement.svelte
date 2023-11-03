```svelte
<script>
  import { onMount } from 'svelte';
  import { adjustElement } from '../utils/adjustElement.js';
  import { blocks } from '../store/blocks.js';

  let adjustableElement;

  onMount(() => {
    adjustElement(adjustableElement);
  });

  function handleAdjustment(event) {
    const blockId = event.target.dataset.blockId;
    const block = blocks.find(block => block.id === blockId);
    adjustElement(block);
  }
</script>

<div id="adjustable-element" bind:this={adjustableElement} on:mouseover={handleAdjustment}>
  <slot></slot>
</div>
```