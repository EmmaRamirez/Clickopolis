import { Utils, iterateOverNodelist } from './utils';
import { Civilization } from '../classes';

const u = new Utils();

export function addCash(playerCiv:Civilization) {
	let prevCash = playerCiv.cashPM;

	playerCiv.cashPM = playerCiv.cashPMFromCitizens + playerCiv.cashPMFromBuildings + playerCiv.cashPMFromBuildingMaintenance + playerCiv.cashPMFromMilitary;

  u.elt('.cash-from-military').textContent = playerCiv.cashPMFromMilitary;

  playerCiv.cash += playerCiv.cashPM / 60;
  let cashText = u.elt('.cash-text', true);
  iterateOverNodelist(cashText, (item, index) => {
    item.textContent = playerCiv.cash.toFixed(2);
  }, this);
}

export function getEconomyStatus(playerCiv:Civilization) {

}

export function updateCashPM(playerCiv) {
	iterateOverNodelist(u.elt('.cash-PM', true), (item) => {
    item.textContent = playerCiv.cashPM;
  }, this);
}
