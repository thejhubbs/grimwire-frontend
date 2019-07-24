import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import ScrollToTop from './components/page/scrollToTop'

import symbolsDb from './db/symbolsDb';
import kindsDb from './db/kindsDb';
import connectionsDb from './db/connectionsDb';
import pantheonsDb from './db/pantheonsDb';
import {usersDb} from './db/miscDb'
import categoriesDb from './db/categoriesDb';




function reducer() {
    return {
      symbols: symbolsDb,
      kinds: kindsDb,
      pantheons: pantheonsDb,
      connections: connectionsDb,
      users: usersDb,
      categories: categoriesDb
    }
  }
  
const store = createStore(reducer);

ReactDOM.render(

<Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        {/* react-bootstrap does not include css for the components; css imported here: */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous" />
          <style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Metal+Mania|Spectral&display=swap');
</style>
        <App />
        </ScrollToTop>
    </BrowserRouter>
</Provider>, 

document.getElementById('root'));
