```svelte
<script>
  import { undoRedo } from '$lib/utils/undoRedo.js';
  import { autosave } from '$lib/utils/autosave.js';
  import { blocks } from '$lib/store/blocks.js';
  import { canvas } from '$lib/store/canvas.js';
  import { draft } from '$lib/store/draft.js';
  import { publish } from '$lib/store/publish.js';

  let isDraftMode = false;

  function toggleDraftMode() {
    isDraftMode = !isDraftMode;
  }

  function saveDraft() {
    draft.set(canvas);
    autosave();
  }

  function publishSite() {
    publish.set(canvas);
  }
</script>

<div id="toolbar">
  <button on:click={undoRedo.undo}>Undo</button>
  <button on:click={undoRedo.redo}>Redo</button>
  <button on:click={toggleDraftMode}>
    {#if isDraftMode}
      Exit Draft Mode
    {:else}
      Enter Draft Mode
    {/if}
  </button>
  <button on:click={saveDraft} disabled={!isDraftMode}>Save Draft</button>
  <button on:click={publishSite} disabled={isDraftMode}>Publish</button>
</div>
```