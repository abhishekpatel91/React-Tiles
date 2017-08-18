import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

// Components
import Home from './home';
import TileDetails from './tileDetails';

const Body = (props) => (
    <main>
        <Switch>
            <Route exact path="/" component={(routeProps) => <Home {...routeProps}/>}/>
            <Route exact path="/search/" component={(routeProps) => <Home {...routeProps}/>}/>
            <Route path="/search/:searchQuery" component={(routeProps) => <Home {...routeProps}/>}/>
            <Route path="/detail/:id" component={TileDetails}/>
        </Switch>
    </main>
);

export default Body;
