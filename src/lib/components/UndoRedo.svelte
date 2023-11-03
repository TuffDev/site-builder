<script>
  import { undoRedo } from '$lib/utils/undoRedo.js';
  import { updateDraft } from '$lib/store/draft.js';

  let canUndo = false;
  let canRedo = false;

  const checkUndoRedo = () => {
    const { canUndo: undo, canRedo: redo } = undoRedo.getState();
    canUndo = undo;
    canRedo = redo;
  };

  const undo = () => {
    const action = undoRedo.undo();
    if (action) {
      updateDraft(action);
    }
    checkUndoRedo();
  };

  const redo = () => {
    const action = undoRedo.redo();
    if (action) {
      updateDraft(action);
    }
    checkUndoRedo();
  };

  undoRedo.subscribe(checkUndoRedo);
</script>

<div id="undo-redo">
  <button on:click={undo} disabled={!canUndo}>Undo</button>
  <button on:click={redo} disabled={!canRedo}>Redo</button>
</div>