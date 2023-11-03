```svelte
<script>
  import { onMount } from 'svelte';
  import { blocks, canvas, draft } from '../lib/store';
  import Canvas from '../lib/components/Canvas.svelte';
  import BlockLibrary from '../lib/components/BlockLibrary.svelte';
  import Toolbar from '../lib/components/Toolbar.svelte';
  import UndoRedo from '../lib/components/UndoRedo.svelte';
  import AutoSave from '../lib/components/AutoSave.svelte';
  import { autosave, undoRedo } from '../lib/utils';

  let blockLibrary, toolbar, undoRedoComponent, autosaveComponent;

  onMount(() => {
    blockLibrary = new BlockLibrary({ target: document.getElementById('block-library') });
    toolbar = new Toolbar({ target: document.getElementById('toolbar') });
    undoRedoComponent = new UndoRedo({ target: document.getElementById('undo-redo') });
    autosaveComponent = new AutoSave({ target: document.getElementById('autosave') });
  });

  function updateDraft() {
    draft.set(canvas);
    autosave();
  }

  function undo() {
    undoRedo.undo();
    updateDraft();
  }

  function redo() {
    undoRedo.redo();
    updateDraft();
  }
</script>

<main>
  <div id="block-library"></div>
  <div id="canvas">
    <Canvas {blocks} {canvas} on:updateCanvas={updateDraft} />
  </div>
  <div id="toolbar">
    <button on:click={undo}>Undo</button>
    <button on:click={redo}>Redo</button>
  </div>
  <div id="undo-redo"></div>
  <div id="autosave"></div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
  }

  #block-library, #canvas, #toolbar, #undo-redo, #autosave {
    margin: 1em;
  }
</style>
```