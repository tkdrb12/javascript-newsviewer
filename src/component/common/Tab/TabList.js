import Component from '../Component';
import TAP_NAME from '../../../assets/TAB_NAME';
import TabItem from './TabItem';

class TabList extends Component {
  currentTabName;

  constructor(currentTabName) {
    super();
    this.currentTabName = currentTabName;
  }

  makeChildrenTabItem() {
    TAP_NAME.forEach((tabObj) => {
      const tabItem = new TabItem(
        tabObj,
        this.currentTabName === tabObj,
        this.changeCurrentTab
      );
      this.children.push(tabItem);
    });
  }

  changeCurrentTab(activeTabName) {
    this.currentTabName = activeTabName;
  }
}

export default TabList;
