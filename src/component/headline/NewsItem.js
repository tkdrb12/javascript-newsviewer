import Component from '../common/Component';

class NewsItem extends Component {
  news;

  constructor(news) {
    super();
    this.news = news;
    this.makeChildren();
  }

  makeChildren() {
    const { title, author, urlToImage } = this.news;

    this.element.innerHTML = `
      <div class="news-item">
        <img src=${urlToImage} alt=${title}/>
        <div class="news-item-title">${title}</div>
        <div class="news-item-author">${author}</div>
      </div>
      `;
  }
}

export default NewsItem;
