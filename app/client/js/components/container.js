import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './header';
import Footer from './footer';
import Main from './main';

export default class Container extends React.Component {
    render() {
        return (
            <Router forceRefresh={false}>
                <div>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}