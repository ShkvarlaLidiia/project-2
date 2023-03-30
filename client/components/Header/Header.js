import { Component } from "../../core/Component";

export class Header extends Component {
  constructor(options) {
    super(options);
    this.tagName = "header";
    if (!options.className) {
      this.className = "header";
    }
  }
}
