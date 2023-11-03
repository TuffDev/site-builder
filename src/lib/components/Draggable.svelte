```svelte
<script>
  import { onMount } from 'svelte';
  import { interact } from '../utils/interact.js';
  import { blocks } from '../store/blocks.js';
  import { canvas } from '../store/canvas.js';

  let draggableElement;

  onMount(() => {
    interact(draggableElement)
      .draggable({
        onmove: dragMoveListener,
        onend: dragEndListener
      });
  });

  function dragMoveListener(event) {
    let target = event.target;
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  function dragEndListener(event) {
    let blockId = event.target.getAttribute('data-id');
    let x = parseFloat(event.target.getAttribute('data-x')) || 0;
    let y = parseFloat(event.target.getAttribute('data-y')) || 0;

    blocks.update(blocks => {
      let block = blocks.find(block => block.id === blockId);
      block.x = x;
      block.y = y;
      return blocks;
    });

    canvas.update(canvas => {
      let block = canvas.blocks.find(block => block.id === blockId);
      block.x = x;
      block.y = y;
      return canvas;
    });
  }
</script>

<div id="draggable" bind:this={draggableElement}>
  <slot></slot>
</div>
```