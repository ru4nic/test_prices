import './menu.scss';
import Logo from './logo';
import Button from '../button';

const Menu = () => {
  const menuEl = document.querySelector('#menu');
  const menuButton = new Button('menu__btn-red', 'Sign Up');

  if (menuEl) {
    document.addEventListener('DOMContentLoaded', () => {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown) {
        //Добавляем и удаляем класс для открытия и закрытия меню для мобильных устройств
        let expanded = false;

        dropdown.addEventListener('click', () => {
          const content = document.querySelector('.dropdown-content');

          if (expanded) {
            expanded = false;
            return content?.classList.remove('expanded');
          } else {
            expanded = true;
            return content?.classList.add('expanded');
          }
        });
      }
    });

    return (menuEl.innerHTML = `<menu>
        ${Logo()}
        <div class='inner'>
            <div class='left-menu'>
                <a href="#" target="_blank">About Us</a>
                <a href="#" target="_blank">Features</a>
                <a href="#" class='active' target="_blank">Pricing</a>
                <a href="#" target="_blank">Product</a>
                <a href="#" target="_blank">Contact</a>
            </div>
            <div class='dropdown'>
              <a class='menu-icon'></a>
              <div class='dropdown-content'>
                <a href="#" class='dropdown-row' target="_blank">About Us</a>
                <a href="#" class='dropdown-row' target="_blank">Features</a>
                <a href="#" class='dropdown-row' target="_blank">Pricing</a>
                <a href="#" class='dropdown-row' target="_blank">Product</a>
                <a href="#" class='dropdown-row' target="_blank">Contact</a>
                <a href="#" class='dropdown-row'>Login</a>
                ${menuButton.renderHTML()}
            </div>
              </div>
            </div>
            <div class='right-menu'>
                <a class='login'>Login</a>
                ${menuButton.renderHTML()}
            </div>
        </div>
      </menu>
    `);
  }
};

export default Menu;
