```svelte
<script>
  import { editContent } from '../utils/editContent.js';

  export let text = '';

  function handleInput(event) {
    text = event.target.textContent;
    editContent(text);
  }
</script>

<div id="editable-text" contenteditable="true" on:input={handleInput}>
  {text}
</div>

<style>
  #editable-text {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 20px;
  }
  #editable-text:focus {
    outline: none;
    border-color: #4d90fe;
  }
</style>
```