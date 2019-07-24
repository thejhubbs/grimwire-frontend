import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './redux/reducer'

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


  
const store = createStore(reducer);

if(false) {
  if( window.confirm("Do you want to clear the local storage and delete added info?") ) {
    if( window.confirm("ARE YOU SURE?!?!?!?!?!?!?!") ) {
      console.log("Clearing storage")
      localStorage.clear();
      console.log("Setting storage")
      localStorage.setItem('symbols', JSON.stringify(symbolsDb))
      localStorage.setItem('kinds', JSON.stringify(kindsDb))
      localStorage.setItem('connections', JSON.stringify(connectionsDb))
      localStorage.setItem('pantheons', JSON.stringify(pantheonsDb))
      localStorage.setItem('users', JSON.stringify(usersDb))
      localStorage.setItem('categories', JSON.stringify(categoriesDb))
      console.log("Good to go")
      console.log( JSON.parse(localStorage.getItem('symbols'))[0] ) 
    }
  }
}

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
