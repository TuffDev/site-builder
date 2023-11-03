```svelte
<script>
  import { onMount } from 'svelte';
  import { autosave } from '../utils/autosave.js';
  import { draft } from '../store/draft.js';

  let autoSaveInterval;

  onMount(() => {
    autoSaveInterval = setInterval(() => {
      autosave(draft);
    }, 5000); // autosave every 5 seconds

    return () => {
      clearInterval(autoSaveInterval);
    };
  });
</script>

<div id="autosave">
  <p>Autosaving...</p>
</div>
```