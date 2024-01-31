import './logo.scss';
const Logo = () => {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');
  logoContainer.innerHTML = `
        <div></div>
        <div>Test Task</div>
`;
  return logoContainer.outerHTML;
};
export default Logo;
