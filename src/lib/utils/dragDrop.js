import interact from 'interact.js';
import { get, writable } from 'svelte/store';
import { blocks } from '../store/blocks.js';
import { canvas } from '../store/canvas.js';

const dragDrop = writable({
    draggable: false,
    x: 0,
    y: 0,
});

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
    });

function dragMoveListener (event) {
    let target = event.target;
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
    target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    dragDrop.update(value => {
        return {...value, x, y};
    });
}

function dragEndListener(event) {
    let blockId = event.target.getAttribute('data-id');
    let {x, y} = get(dragDrop);

    let blockIndex = get(blocks).findIndex(block => block.id === blockId);
    let canvasIndex = get(canvas).findIndex(block => block.id === blockId);

    if (blockIndex !== -1) {
        blocks.update(blockList => {
            blockList[blockIndex].x = x;
            blockList[blockIndex].y = y;
            return blockList;
        });
    }

    if (canvasIndex !== -1) {
        canvas.update(canvasList => {
            canvasList[canvasIndex].x = x;
            canvasList[canvasIndex].y = y;
            return canvasList;
        });
    }
}

export default dragDrop;