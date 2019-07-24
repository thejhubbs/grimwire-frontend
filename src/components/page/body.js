import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from "../../views/home";

import Symbols from '../../views/symbol';
import Pantheons from '../../views/pantheon';
import Kinds from '../../views/kind';
import Categories from '../../views/category';


import SymbolPage from '../../components/symbol/symbolPage';
import PantheonPage from '../../components/pantheon/pantheonPage';
import KindPage from '../../components/kind/kindPage';
import CategoryPage from '../../components/category/categoryPage';

import UserComponent from '../../views/user';

import DownloadDatabase from '../../views/downloadDatabase'

function Body() {
    return <div className="body">
        <Switch>
            <Route path="/" exact component={Home} />
            
            <Route path="/symbols" component={Symbols} />
            <Route path="/pantheons" component={Pantheons} />
            <Route path="/collections" component={Kinds} />
            <Route path="/categories" component={Categories} />

            <Route exact path="/symbol/:name" component={SymbolPage} />
            <Route path="/pantheon/:name" component={PantheonPage} />
            <Route path="/collection/:name" component={KindPage} />
            <Route path="/category/:name" component={CategoryPage} />

            <Route path="/users/" component={UserComponent} />

            <Route path="/downloadDb/:name" component={DownloadDatabase} />
        </Switch> 
    </div>
}

export default Body;