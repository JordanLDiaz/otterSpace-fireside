import { appState } from "../AppState.js";
import { fruitsService } from "../Services/FruitsService.js";

function _drawFruit() {
  document.getElementById('fruit-count').innerText = appState.fruit
}

export class FruitsController {
  constructor() {
    appState.on('fruit', _drawFruit)
    _drawFruit()
  }
  mineFruit() {
    fruitsService.mineFruit()
  }
}