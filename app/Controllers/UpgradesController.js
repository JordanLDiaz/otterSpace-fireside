import { appState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawClickUpgrades() {
  let template = ''
  appState.upgrades.forEach(u => template += u.ClickUpgradeTemplate)
  setHTML('click-upgrades', template)
}
export class UpgradesController {
  constructor() {
    appState.on('upgrades', _drawClickUpgrades)
    _drawClickUpgrades()
  }

  buyUpgrade(name) {
    upgradesService.buyUpgrade(name)
    // console.log(name)
  }
}