import Component from '../common/Component';
import NewsItem from './NewsItem';

class NewsList extends Component {
  constructor() {
    super();
  }

  async fetchNewsData(category) {
    const baseURL = 'https://newsapi.org/v2/top-headlines';
    const params = new URLSearchParams({
      ...(category && { category }),
      country: 'kr',
      apiKey: process.env.API_KEY,
    });

    try {
      const response = await fetch(`${baseURL}?${params}`);
      const data = await response.json();
      data.articles.forEach((newsData) => {
        const newsItem = new NewsItem(newsData);
        this.children.push(newsItem);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default NewsList;
