import { writable } from 'svelte/store';

// Initial state of the canvas
const initialState = {
  blocks: [],
};

// Create the canvas store
const canvas = writable(initialState);

// Function to add a block to the canvas
const addBlock = (block) => {
  canvas.update(state => {
    return { ...state, blocks: [...state.blocks, block] };
  });
};

// Function to remove a block from the canvas
const removeBlock = (blockId) => {
  canvas.update(state => {
    return { ...state, blocks: state.blocks.filter(block => block.id !== blockId) };
  });
};

// Function to update a block on the canvas
const updateBlock = (blockId, updatedBlock) => {
  canvas.update(state => {
    return {
      ...state,
      blocks: state.blocks.map(block => block.id === blockId ? updatedBlock : block)
    };
  });
};

// Function to clear the canvas
const clearCanvas = () => {
  canvas.set(initialState);
};

export default {
  subscribe: canvas.subscribe,
  addBlock,
  removeBlock,
  updateBlock,
  clearCanvas,
};