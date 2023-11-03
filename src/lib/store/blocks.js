import { writable } from 'svelte/store';

// Initial blocks data
const initialBlocks = [
  // Add your initial blocks here
  // Example:
  // {
  //   id: 1,
  //   type: 'Hero',
  //   content: 'Welcome to our website!',
  //   elements: ['IFrame', 'button', 'image', 'icon']
  // },
];

// Create a writable store for blocks
const blocks = writable(initialBlocks);

// Function to update a block
const updateBlock = (id, newBlock) => {
  blocks.update(blocks => {
    const blockIndex = blocks.findIndex(block => block.id === id);
    if (blockIndex !== -1) {
      blocks[blockIndex] = newBlock;
    }
    return blocks;
  });
};

// Function to add a block
const addBlock = (block) => {
  blocks.update(blocks => {
    blocks.push(block);
    return blocks;
  });
};

// Function to delete a block
const deleteBlock = (id) => {
  blocks.update(blocks => {
    return blocks.filter(block => block.id !== id);
  });
};

export { blocks, updateBlock, addBlock, deleteBlock };