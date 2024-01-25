import Component from '../Component';

value, name;

class TabItem extends Component {
  isActive;
  name;
  value;

  constructor(tabName, isActive, changeCurrentTab) {
    super();
    this.name = tabName.name;
    this.value = tabName.value;
    this.isActive = isActive;
    this.changeCurrentTab = changeCurrentTab;
  }

  changeThisElement() {
    this.element.innerText = this.name;
    this.element.classList.add('tab-item');
  }
  addEventListener() {
    this.element.addEventListener('click', () => {
      changeCurrentTab(this.element.value);
    });
  }
}

export default TabItem;
