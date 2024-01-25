import Component from './component/common/Component';
import TabList from './component/common/Tab/TabList';
import NewsList from './component/headline/NewsList';
import Header from './component/layout/Header';
import './styles';
require('dotenv').config();

class App {
  constructor() {
    const appElement = document.getElementById('app');

    const header = new Header();

    const tab = new TabList();
    const newsList = new NewsList('section', tab);

    header.render(appElement);

    tab.render(appElement);

    newsList.fetchNewsData().then(() => newsList.render(appElement));
  }
}

const app = new App();
