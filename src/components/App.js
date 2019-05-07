import React from 'react';
import { AppContext } from '../context';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'


class App extends React.Component {
  state = {
    loading: false,
    article: null,
  }
  getNews = () => {
    this.setState({ loading: true });
    fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then((res) => res.json())
    .then((res) => this.setState({ article: res, loading: false }))
    console.log('getting there');
  }
  render = () => {
    const { article, loading } = this.state;
    return (
      <AppContext.Provider value={{
        article: article,
        getNews: this.getNews,
        loading: loading,
      }}>
        <Button />
        <Loading />
        <NewsItem />
      </AppContext.Provider>
    );
  }
}


export default App;

