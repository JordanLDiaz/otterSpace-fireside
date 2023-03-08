import { appState } from "../AppState.js";

class UpgradesService {
  buyUpgrade(name) {
    // console.log('buying upgrade from service', name)
    let foundUpgrade = appState.upgrades.find(u => u.name == name)
    if (!foundUpgrade) { return }
    // console.log("upgrade", foundUpgrade)
    if (appState.fruit >= foundUpgrade.price) {
      appState.fruit -= foundUpgrade.price
      // console.log('new fruit count', appState.fruit)
      foundUpgrade.quantity++
      foundUpgrade.price += foundUpgrade.price * foundUpgrade.multiplier
      // console.log('found upgrade price', foundUpgrade)
      appState.emit('upgrade')
    } else {
      alert('Not enough fruit, keep mining!!!')
    }

  }

}

export const upgradesService = new UpgradesService();