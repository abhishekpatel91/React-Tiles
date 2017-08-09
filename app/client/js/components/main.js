import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route path="/home" component={()=>(<h2>Home</h2>)}/>
            <Route path="/search" component={()=>(<h2>Search</h2>)}/>
            <Route path="/detail" component={()=>(<h2>Detail</h2>)}/>
            <Redirect from="/" to="/home" />
        </Switch>
    </main>
);

export default Main;