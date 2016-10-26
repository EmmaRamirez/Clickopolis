import { Utils } from './utils';

let u = new Utils();

interface TooltipOptions {
  offsetX?: number;
  offsetY?: number;
  followCursor?: boolean;
  classes?: string[];
}

export function generateTooltips(opts:TooltipOptions = {
  offsetX: 10,
  offsetY: 10
 }) {
  let tooltipElts = u.elt('[data-tooltip]', true);
  [].forEach.call(tooltipElts, function (item: any, index: number) {
    let text = item.getAttribute('data-tooltip');
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `${text}`;
    item.addEventListener('mouseenter', function (event:any) {
      tooltip.style.left = event.clientX + opts.offsetX + 'px';
      tooltip.style.top = event.clientY + opts.offsetY + 'px';
      item.appendChild(tooltip);
    });
    item.addEventListener('mousemove', function (event:any) {
      tooltip.style.left = event.clientX + opts.offsetX + 'px';
      tooltip.style.top = event.clientY + opts.offsetY + 'px';
    });
    item.addEventListener('mouseleave', function (event:any) {
      if (tooltip.parentNode === item) item.removeChild(tooltip);
    });
  });
}

export function updateTooltip(elt: HTMLElement, opts:TooltipOptions = {
  offsetX: 10,
  offsetY: 10
}) {
  let text = elt.getAttribute('data-tooltip');
  let tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerHTML = `${text}`;
  elt.addEventListener('mouseenter', function (event:any) {
    tooltip.style.left = event.clientX + opts.offsetX + 'px';
    tooltip.style.top = event.clientY + opts.offsetY + 'px';
    elt.appendChild(tooltip);
  });
  elt.addEventListener('mousemove', function (event:any) {
    tooltip.style.left = event.clientX + opts.offsetX + 'px';
    tooltip.style.top = event.clientY + opts.offsetY + 'px';
  });
  elt.addEventListener('mouseleave', function (event:any) {
    if (tooltip.parentNode === elt) elt.removeChild(tooltip);
  });
}
