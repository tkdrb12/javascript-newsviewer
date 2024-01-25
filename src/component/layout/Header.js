import Component from '../common/Component';

class Header extends Component {
  text;

  constructor() {
    super('header');
    this.element.innerText = 'LINKHU';
  }
}

export default Header;
