import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../views/misc/home';
import UserComponent from '../views/misc/user';


import SymbolsIndex from '../views/component/symbol/index';
import PantheonsIndex from '../views/component/pantheon/index';
import KindsIndex from '../views/component/kind/index';
import CategoriesIndex from '../views/component/category/index';

import SymbolPage from '../views/component/symbol/page';
import PantheonPage from '../views/component/pantheon/page';
import KindPage from '../views/component/kind/page';
import CategoryPage from '../views/component/category/page';


function Body() {
    return <div className="body">
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/symbols" component={SymbolsIndex} />
            <Route path="/pantheons" component={PantheonsIndex} />
            <Route path="/collections" component={KindsIndex} />
            <Route path="/categories" component={CategoriesIndex} />

            <Route path="/symbol/:id" component={SymbolPage} />
            <Route path="/pantheon/:id" component={PantheonPage} />
            <Route path="/collection/:id" component={KindPage} />
            <Route path="/category/:id" component={CategoryPage} />

            <Route path="/users/" component={UserComponent} />
        </Switch>
    </div>
}

export default Body;
