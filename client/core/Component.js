export class Component {
  // this equal to self
  constructor(options) {
    const { tagName, className, children, events, text, ...attrs } = options;

    this.tagName = tagName;
    this.className = className;
    this.children = children;
    this.events = events;
    this.attrs = attrs;
    this.text = text;
  }

  toInlineHTML() {
    return `<${this.tagName} class="${this.className}">
          ${this.text}
        </${this.tagName}`;
  }

  toHTML() {
    const element = document.createElement(this.tagName);

    element.className = this.className;
    console.log(element);

    if (this.text) {
      element.innerText += this.text;
    }

    if (this.children) {
      element.insertAdjacentHTML("beforeend", this.children);
    }

    for (const key in this.events) {
      console.log(this.events);
      const value = this.events[key];
      element.addEventListener(key, value);
    }

    for (const key in this.attrs) {
      const value = this.attrs[key];
      element.setAttribute(key, value);
    }

    return element;
  }
}
