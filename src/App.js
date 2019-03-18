import React from 'react';
import {Provider} from 'react-redux'
import MovieExp from './movieExp/movieExp';
import Loader from './loader/loder';
import './App.css';
import store from './storeCreator';

export default function App() {
  return (
    <Provider store={store}>
      <Loader />
        <MovieExp />
    </Provider>
  );
};
