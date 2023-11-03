```svelte
<script>
	import { blocks } from '$lib/store/blocks.js';
	import { canvas } from '$lib/store/canvas.js';
	import BlockLibrary from '$lib/components/BlockLibrary.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import UndoRedo from '$lib/components/UndoRedo.svelte';
	import AutoSave from '$lib/components/AutoSave.svelte';
</script>

<main>
	<Toolbar />
	<UndoRedo />
	<AutoSave />
	<BlockLibrary {blocks} />
	<Canvas {canvas} />
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1em;
	}
</style>
```