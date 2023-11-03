import interact from 'interact.js';
import { get } from 'svelte/store';
import { blocks, canvas } from '../store/blocks.js';
import { updateBlock, updateCanvas } from '../store/canvas.js';

export function setupInteract() {
  interact('.draggable')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      onmove: dragMoveListener,
      onend: dragEndListener
    })
    .resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      modifiers: [
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true,
        }),
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 },
        })
      ],
      inertia: true,
    })
    .on('resizemove', resizeMoveListener)
    .on('resizeend', resizeEndListener);
}

function dragMoveListener(event) {
  let target = event.target;
  let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function dragEndListener(event) {
  let blockId = event.target.getAttribute('data-id');
  let block = get(blocks).find(block => block.id === blockId);
  if (block) {
    block.x = event.target.getAttribute('data-x');
    block.y = event.target.getAttribute('data-y');
    updateBlock(block);
  }
  updateCanvas(get(blocks));
}

function resizeMoveListener(event) {
  let target = event.target;
  let x = (parseFloat(target.getAttribute('data-x')) || 0);
  let y = (parseFloat(target.getAttribute('data-y')) || 0);

  target.style.width = event.rect.width + 'px';
  target.style.height = event.rect.height + 'px';
  target.style.transform = `translate(${x}px, ${y}px)`;

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function resizeEndListener(event) {
  let blockId = event.target.getAttribute('data-id');
  let block = get(blocks).find(block => block.id === blockId);
  if (block) {
    block.width = event.target.style.width;
    block.height = event.target.style.height;
    updateBlock(block);
  }
  updateCanvas(get(blocks));
}