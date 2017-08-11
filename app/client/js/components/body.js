import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

// Components
import Home from './home';
import TileDetails from './tileDetails';

const Body = (props) => (
    <main>
        <Switch>
            <Route exact path="/" component={()=><Home {...props}/>}/>
            <Route exact path="/search/" component={(routeProps) => <Home {...props} {...routeProps}/>}/>
            <Route path="/search/:searchQuery" component={(routeProps) => <Home {...props} {...routeProps}/>}/>
            <Route path="/detail/:id" component={(routeProps) => <TileDetails {...routeProps} {...props}/>}/>
        </Switch>
    </main>
);

export default Body;
