import { Utils, bindElement, iterateOverNodelist } from './utils';



const u = new Utils();

let biomeInput = u.elt('#biome-input');
let biomeClose = u.elt('.close-biome');
let biomeSelectDropdown = u.elt('.biome-select-dropdown');
let bsdInner = u.elt('.biome-select-dropdown-inner');

export function resetBiomeSelected() {
  iterateOverNodelist(u.elt('.biome-select li', true), (item) => {
    item.setAttribute('data-selected', 'false');
  }, true);
}

export function openBiomeSelect(value:boolean) {
  let status:string;
  value ? status = 'true' : status = 'false';
  u.elt('.biome-select').setAttribute('data-open', status);
  biomeSelectDropdown.setAttribute('data-open', status);
}

export function toggleBiomeSelectDropdown () {
  let open = u.elt('.biome-select').getAttribute('data-open');
  open === true ? openBiomeSelect(false) : openBiomeSelect(true);
}

export function biomeSelection(biomeInput) {

  bindElement('.biome-select-dropdown', 'click', () => { toggleBiomeSelectDropdown() });


  let selectedItemIndex = 0;
  u.elt('.biome-select-dropdown').addEventListener('keydown', (event) => {
    let items = u.elt('.biome-select li', true);
    let val;
    if (event.which === 13) {
      toggleBiomeSelectDropdown();
    }
    if (event.which === 40) {
      resetBiomeSelected();
      items[selectedItemIndex].setAttribute('data-selected', 'true');
      val = items[selectedItemIndex].getAttribute('data-value');
      if (selectedItemIndex === items.length - 1) {
        selectedItemIndex = 0;
      } else {
        selectedItemIndex += 1;
      }
    }
    if (event.which === 38) {
      selectedItemIndex -= 1;
      if (selectedItemIndex === -1) {
        selectedItemIndex = 4;
      }
      resetBiomeSelected();
      items[selectedItemIndex].setAttribute('data-selected', 'true');
      val = items[selectedItemIndex].getAttribute('data-value');
    }
    if (event.which === 38 || event.which === 40) {
      biomeInput.value = val;
      bsdInner.innerHTML = `<img src='img/${val.toLowerCase()}.png'> ${val}`;
    }
  });

  let toggleValue = 1;
  iterateOverNodelist(u.elt('.biome-select li', true), (item, index) => {
    item.addEventListener('click', function () {
      let selected = item.getAttribute('data-selected');
      let val = item.getAttribute('data-value');
      biomeInput.value = val;
      console.log(biomeInput.value);
      openBiomeSelect(true);
      resetBiomeSelected();
      item.setAttribute('data-selected', 'true');
      bsdInner.innerHTML = `<img src='img/${val.toLowerCase()}.png'> ${val}`;
      openBiomeSelect(false);
    });
  }, this);
}