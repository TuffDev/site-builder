import { writable } from 'svelte/store';

// Initial state of the published website
const initialState = {
  blocks: [],
};

// Create a writable store for the published website
const publish = writable(initialState);

// Function to update the publish state
const updatePublish = (newState) => {
  publish.update(state => {
    return { ...state, ...newState };
  });
};

export { publish, updatePublish };