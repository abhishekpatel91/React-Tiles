import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

// Components
import Home from './home';
import TileDetail from './tileDetail';

const Body = (props) => (
    <main>
        <Switch>

            <Route exact path="/" component={()=><Home {...props}/>}/>

            <Route path="/home" component={()=>(<h2>Home</h2>)}/>

            <Route exact path="/search/" component={(routeProps) => <Home {...props} {...routeProps}/>}/>

            <Route path="/search/:searchQuery" component={(routeProps) => <Home {...props} {...routeProps}/>}/>

            <Route path="/detail/:id" component={(routeProps) => <TileDetail {...routeProps} {...props}/>}/>
            
            {/*<Redirect from="/" to="/home" />*/}
        </Switch>
    </main>
);

export default Body;