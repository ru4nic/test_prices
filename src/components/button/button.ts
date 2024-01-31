import './button.scss';

class Button {
  private className: string[];
  private text: string;
  private element: HTMLElement;
  private endIcon?: boolean;

  constructor(className: string | string[], text: string, endIcon = false) {
    this.className = Array.isArray(className) ? className : [className];
    this.text = text;
    this.endIcon = endIcon;
    this.element = document.createElement('button');
    this.element.classList.add(...this.className);
    this.element.innerHTML = `${
      this.endIcon
        ? `${this.text}<div class='card__btn-icon-wrapper'>
                        <div class='card__btn-icon'></div>
                      </div>`
        : this.text
    }`;
  }
  renderHTML() {
    return this.element.outerHTML;
  }
}
export default Button;
