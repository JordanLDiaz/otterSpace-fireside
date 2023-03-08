export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.multiplier = data.multiplier
    this.type = data.type
  }

  get ClickUpgradeTemplate() {
    return `
    <button onclick="app.upgradesController.buyUpgrade('${this.name}')"
    class="btn btn-purple text-light text-center m-2">
    <span>
      <p>${this.name}</p>
      <h5> ${this.price} <i class="mdi mdi-fruit-pineapple"></i></h5>
    </span>
  </button>
    `
  }
}