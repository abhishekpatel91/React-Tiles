import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="row text-center">
        <div>
            <Link to="/" className="logo">
                <img src="/images/logo.jpg" alt="logo" />
            </Link>
        </div>
        <h1>Games Library</h1>
    </header>
);

export default Header;
