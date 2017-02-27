import { base } from '../utils';

let u = new Utils();

interface TooltipOptions {
  offsetX?: number;
  offsetY?: number;
  followCursor?: boolean;
  classes?: string[];
}

let tti = 0;

export function generateTooltips(opts:TooltipOptions = {
  offsetX: 10,
  offsetY: 10
 }) {
  let tooltipElts = u.elt('[data-tooltip]', true);
  [].forEach.call(tooltipElts, function (item: any, index: number) {
    let text = item.getAttribute('data-tooltip');
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.id = `tooltip-${tti += 1}`;
    tooltip.innerHTML = `${text}`;
    item.addEventListener('mouseenter', function (event:any) {
      tooltip.style.display = 'block';
      tooltip.style.left = event.clientX + opts.offsetX + 'px';
      tooltip.style.top = event.clientY + opts.offsetY + 'px';
      u.elt('.clickopolis').appendChild(tooltip);
    });
    item.addEventListener('mousemove', function (event:any) {
      tooltip.style.left = event.clientX + opts.offsetX + 'px';
      tooltip.style.top = event.clientY + opts.offsetY + 'px';
    });
    item.addEventListener('mouseleave', function (event:any) {
      //tooltip.remove();
      tooltip.style.display = 'none';
    });
  });
}


export function betterUpdateTooltip(elt: HTMLElement, tooltip) {
  tooltip.textContent = elt.getAttribute('data-tooltip');
}

export function updateTooltip(elt: HTMLElement, opts:TooltipOptions = {
  offsetX: 10,
  offsetY: 10
}) {
  let text = elt.getAttribute('data-tooltip');

  let tooltip;

  //tooltip = elt.querySelector('.tooltip');

  tooltip = document.createElement('div');

  tooltip.className = 'tooltip';

  tooltip.innerHTML = `${text}`;

  elt.addEventListener('mouseenter', function (event:any) {
    tooltip.style.left = event.clientX + opts.offsetX + 'px';
    tooltip.style.top = event.clientY + opts.offsetY + 'px';
    u.elt('.clickopolis').appendChild(tooltip);
  });
  elt.addEventListener('mousemove', function (event:any) {
    tooltip.style.left = event.clientX + opts.offsetX + 'px';
    tooltip.style.top = event.clientY + opts.offsetY + 'px';
  });
  elt.addEventListener('mouseleave', function (event:any) {
    tooltip.remove();
  });

}
