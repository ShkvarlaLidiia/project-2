import { Component } from "../../core/Component";

export class Main extends Component {
  constructor(options) {
    super(options);
    this.tagName = "main";
    this.className = [].concat("main");
  }
}
