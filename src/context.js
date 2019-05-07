import React from 'react';

export const AppContext = React.createContext({
    article: null,
    getNews: () => {console.log('getting there');},
    loading: false,
});