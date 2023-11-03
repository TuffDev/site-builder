```svelte
<script>
  import { onMount } from 'svelte';
  import { blocks } from '$lib/store/blocks.js';
  import { canvas } from '$lib/store/canvas.js';
  import { draft } from '$lib/store/draft.js';
  import interact from '$lib/utils/interact.js';
  import autosave from '$lib/utils/autosave.js';
  import undoRedo from '$lib/utils/undoRedo.js';
  import BlockLibrary from '$lib/components/BlockLibrary.svelte';
  import Canvas from '$lib/components/Canvas.svelte';
  import Toolbar from '$lib/components/Toolbar.svelte';
  import UndoRedo from '$lib/components/UndoRedo.svelte';
  import AutoSave from '$lib/components/AutoSave.svelte';

  let blockLibrary, canvasElement;

  onMount(() => {
    interact(blockLibrary, canvasElement);
    autosave(draft);
    undoRedo(draft);
  });
</script>

<main>
  <Toolbar />
  <div id="block-library">
    <BlockLibrary bind:this={blockLibrary} {blocks} />
  </div>
  <div id="canvas">
    <Canvas bind:this={canvasElement} {canvas} {draft} />
  </div>
  <div id="undo-redo">
    <UndoRedo {draft} />
  </div>
  <div id="autosave">
    <AutoSave {draft} />
  </div>
</main>
```