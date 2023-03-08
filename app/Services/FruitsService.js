import { appState } from "../AppState.js";

class FruitsService {
  mineFruit() {
    appState.fruit++
    console.log("fruit count", appState.fruit)
  }

}

export const fruitsService = new FruitsService();