import interact from 'interact.js';

export function adjustElement(elementId) {
  interact(`#${elementId}`)
    .resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    })
    .on('resizemove', function (event) {
      let target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

      target.style.width = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    });
}