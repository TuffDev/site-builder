import { writable } from 'svelte/store';
import { blocks, canvas, draft, publish } from '../store';

let autosaveInterval;

export function startAutosave() {
    autosaveInterval = setInterval(() => {
        autosave();
    }, 5000); // autosave every 5 seconds
}

export function stopAutosave() {
    clearInterval(autosaveInterval);
}

function autosave() {
    const blocksData = get(blocks);
    const canvasData = get(canvas);
    const draftData = get(draft);

    localStorage.setItem('blocks', JSON.stringify(blocksData));
    localStorage.setItem('canvas', JSON.stringify(canvasData));
    localStorage.setItem('draft', JSON.stringify(draftData));
}

export function loadAutosave() {
    const blocksData = JSON.parse(localStorage.getItem('blocks'));
    const canvasData = JSON.parse(localStorage.getItem('canvas'));
    const draftData = JSON.parse(localStorage.getItem('draft'));

    if (blocksData) {
        blocks.set(blocksData);
    }
    if (canvasData) {
        canvas.set(canvasData);
    }
    if (draftData) {
        draft.set(draftData);
    }
}