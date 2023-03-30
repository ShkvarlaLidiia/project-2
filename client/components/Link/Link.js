import { Component } from "../../core/Component";

export class Link extends Component {
  constructor(options) {
    super(options);
    this.tagName = "button";
  }
}
