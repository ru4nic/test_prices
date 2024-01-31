import './styles/layout.scss';

import Menu from './components/menu';
import Card from './components/card';

import { cards } from './components/card/data';

Menu(); //Navbar

const fragment = document.createDocumentFragment();

const Basic = new Card(cards[0]); //Создаем первую карточку
Basic.render();
fragment.appendChild(Basic.getContainer()); //

const Professional = new Card(cards[1], 'vip'); //Создаем вторую карточку
Professional.render();
fragment.appendChild(Professional.getContainer());

const Premium = new Card(cards[2]); //Создаем третью карточку
Premium.render();
fragment.appendChild(Premium.getContainer());

const mainContainer: HTMLElement | null = document.getElementById('card-group');

document.addEventListener('DOMContentLoaded', () => {
  // Анимация появления карточек после загрузки страницы
  setTimeout(() => {
    Basic.getContainer().classList.add('visible');
  }, 700);

  setTimeout(() => {
    Professional.getContainer().classList.add('visible');
  }, 100);

  setTimeout(() => {
    Premium.getContainer().classList.add('visible');
  }, 700);

  const cardContainer = document.querySelector('#card-group');
  if (cardContainer) {
    cardContainer.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('currency')) {
        //если кликаем по символу валюты, то он поменяется на другой на всех карточках
        Basic.changeCurrency();
        Professional.changeCurrency();
        Premium.changeCurrency();

        //Перерисовываем карточки с обновлёнными данными
        Basic.render();
        Professional.render();
        Premium.render();
      }
      if (target.classList.contains('period')) {
        //если кликаем на "период", то меняем он поменяется на "дни" на всех карточах
        Basic.changePeriod();
        Professional.changePeriod();
        Premium.changePeriod();
        //Перерисовываем все карточки с обновлёнными данными
        Basic.render();
        Professional.render();
        Premium.render();
      }
    });
  }
});
//встраиваем карточки в контейнер #card-group
mainContainer?.appendChild(fragment);
