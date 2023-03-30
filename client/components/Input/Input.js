import { Component } from "../../core/Component";

export class Input extends Component {
  constructor(options) {
    super(options);
    this.tagName = "input";
    this.className = [].concat("input");
  }
}
