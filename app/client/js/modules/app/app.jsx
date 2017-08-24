import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../loader/index';
import Content from './content';

const App = () => (
    <Router>
        <div>
            <Header/>
            <Content/>
            <Loader/>
            <Footer/>
        </div>
    </Router>
);

export default App;
