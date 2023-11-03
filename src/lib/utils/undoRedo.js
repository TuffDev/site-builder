import { writable } from 'svelte/store';

const initialState = {
  past: [],
  present: null,
  future: []
};

const undoRedoStore = writable(initialState);

const undoRedo = {
  subscribe: undoRedoStore.subscribe,
  set: undoRedoStore.set,
  reset: () => undoRedoStore.set(initialState),
  undo: () => {
    undoRedoStore.update(state => {
      const { past, present, future } = state;

      if (past.length === 0) return state;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };
    });
  },
  redo: () => {
    undoRedoStore.update(state => {
      const { past, present, future } = state;

      if (future.length === 0) return state;

      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };
    });
  },
  addState: newState => {
    undoRedoStore.update(state => {
      const { past, present } = state;

      if (newState === present) return state;

      return {
        past: [...past, present],
        present: newState,
        future: []
      };
    });
  }
};

export default undoRedo;