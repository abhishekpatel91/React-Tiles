import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './header';
import Footer from './footer';
import Body from './body';
import Loader from './loader';

export default class Container extends React.Component {
    render() {
        return (
            <Router forceRefresh={false}>
                <div>
                    <Header/>
                    <Body/>
                    <Loader/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
