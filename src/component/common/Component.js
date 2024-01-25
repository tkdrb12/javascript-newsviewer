const $ = (selector) => document.querySelector(selector);

class Component {
  element;
  children;

  constructor(type) {
    this.element = document.createElement(type);
    this.children = [];
  }

  render(parentComponent) {
    if (parentComponent instanceof Component) {
      parentComponent.element.appendChild(this.element);

      this.children.forEach((element) => {
        element.render(this);
      });
    }

    if (parentComponent instanceof HTMLElement) {
      parentComponent.appendChild(this.element);

      this.children.forEach((element) => {
        element.render(this);
      });
    }
  }

  addEventListener() {}
}

export default Component;
