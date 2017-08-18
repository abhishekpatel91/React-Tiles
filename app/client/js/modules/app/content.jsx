import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

// Components
import Home from '../home/index';
import TileDetails from '../details/index';

const Content = (props) => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/" component={Home}/>
            <Route path="/search/:searchQuery" component={Home}/>
            <Route path="/detail/:id" component={TileDetails}/>
        </Switch>
    </main>
);

export default Content;
