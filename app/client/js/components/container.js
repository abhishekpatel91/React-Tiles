import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './header';
import Footer from './footer';
import Body from './body';

// private method for xhr request
const xhr = new XMLHttpRequest();
function makeAjax(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 400) {
                    reject();
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        }
        xhr.open(method, url, true);
        xhr.send(data);
    });
}

export default class Container extends React.Component {
    render() {
        return (
            <Router forceRefresh={false}>
                <div>
                    <Header/>
                    <Body
                        makeAjax={makeAjax}
                    />
                    <Footer/>
                </div>
            </Router>
        )
    }
}