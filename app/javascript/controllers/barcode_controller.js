import { Controller } from "@hotwired/stimulus"
import JsBarcode from 'jsbarcode';

// Connects to data-controller="barcode"
export default class extends Controller {
  connect() {
    const options = {
      format: "CODE128",
      // format: "CODE39",
      lineColor: "#0000FF",
      displayValue: false,
      width: 2,
      margin: 0
    }
    JsBarcode(this.element, this.element.dataset.code, options)
  }
}
