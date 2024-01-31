import './card.scss';
import { iCards } from './data';
import Button from '../button';

class Card {
  private data: iCards;
  private container: HTMLDivElement;
  private vip?: string;
  private cymbolOfCyrrency: string;
  private currency: string;
  private period: string;
  private button: Button;

  constructor(data: iCards, vip?: string) {
    this.data = data;
    this.vip = vip;
    this.container = document.createElement('div');
    this.container.classList.add('card');
    this.button = new Button(
      this.vip ? ['card__btn', 'card__btn-red'] : 'card__btn',
      this.vip ? 'Get Started' : 'Start Free Trial',
      !!this.vip
    );
    if (vip) {
      this.container.classList.add('card', vip);
    }
    this.cymbolOfCyrrency = '$';
    this.currency = 'dollar';

    this.period = 'month';
  }
  render() {
    this.container.innerHTML = `
        <div class='card__top'>
          <div class='heading'>
            <h2 class='card__title'>${this.data.title}</h2>
            <div class='price-wrapp'>
              <div class='currency'>${this.cymbolOfCyrrency}</div>
              <div class='price'>
                <span class='count'>${
                  this.data.prices?.[this.period]?.[this.currency]
                }</span>
                <span class='period'>/${this.period}</span>
              </div>
            </div>
          </div>
          <div class='card__top-desc'>Get Torque's basic plan to optimise you lead generation process.</div>
        </div>
        <div class='card__bottom'>
          <div class='features'>
            <div class='features__title'>Core Features</div>
            <div class='features__desc'>${this.data.desc}</div>
            <div class='features__list'>
                ${this.data.features
                  .map((item) => {
                    if (item.white) {
                      return `<div class='features__item'>
                                <div class='list-icon'></div>
                                ${item.name}
                            </div>`;
                    } else {
                      return `<div class='features__item grey'>
                                <div class='list-icon'></div>
                                ${item.name}
                            </div>`;
                    }
                  })
                  .join('')}
            </div>
          </div>
        </div>
        <div class='action'>
          ${this.button.renderHTML()}
        </div>
      `;
  }
  changeCurrency() {
    if (this.currency === 'dollar') {
      this.cymbolOfCyrrency = '€';
      return (this.currency = 'euro');
    }
    if (this.currency === 'euro') {
      this.cymbolOfCyrrency = '₽';
      return (this.currency = 'rouble');
    }
    if (this.currency === 'rouble') {
      this.cymbolOfCyrrency = '$';
      return (this.currency = 'dollar');
    }
  }
  changePeriod() {
    if (this.period === 'month') {
      return (this.period = 'day');
    } else {
      return (this.period = 'month');
    }
  }
  getContainer(): HTMLDivElement {
    return this.container;
  }
}

export default Card;
