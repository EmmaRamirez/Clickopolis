import { Utils, iterateOverNodelist } from './utils';

const u = new Utils();

export function addCash(playerCiv) {
  playerCiv.cash += playerCiv.cashPM / 60;
  let cashText = u.elt('.cash-text', true);
  iterateOverNodelist(cashText, (item, index) => {
    item.textContent = playerCiv.cash.toFixed(2);
  }, this);
}

export function updateCashPM(playerCiv) {
	iterateOverNodelist(u.elt('.cash-PM', true), (item) => {
    item.textContent = playerCiv.cashPM;
  }, this);
}