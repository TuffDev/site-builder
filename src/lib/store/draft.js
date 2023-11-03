import { writable } from 'svelte/store';

// Initial state of the draft
const initialState = {
  blocks: [],
  unsavedChanges: false,
};

// Create the draft store
const createDraft = () => {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addBlock: (block) => update(state => {
      state.blocks.push(block);
      state.unsavedChanges = true;
      return state;
    }),
    removeBlock: (blockId) => update(state => {
      state.blocks = state.blocks.filter(block => block.id !== blockId);
      state.unsavedChanges = true;
      return state;
    }),
    updateBlock: (blockId, newBlock) => update(state => {
      const blockIndex = state.blocks.findIndex(block => block.id === blockId);
      if (blockIndex > -1) {
        state.blocks[blockIndex] = newBlock;
        state.unsavedChanges = true;
      }
      return state;
    }),
    saveChanges: () => update(state => {
      state.unsavedChanges = false;
      return state;
    }),
    reset: () => set(initialState),
  };
};

export const draft = createDraft();