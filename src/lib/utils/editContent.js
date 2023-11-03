```javascript
import { blocks } from '../store/blocks.js';

export function editContent(blockId, newContent) {
    const blockIndex = blocks.findIndex(block => block.id === blockId);
    if (blockIndex !== -1) {
        blocks[blockIndex].content = newContent;
    }
}
```