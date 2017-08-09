import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="row">
        <div className="col-lg-2 col-md-2 col-xs-3">
            <Link to="/home">
                <img src="/images/logo.jpg" alt="logo" />
            </Link>
        </div>
        <h1 className="col-lg-10 col-md-10 col-xs-9 text-center">
            Tiles
        </h1>
    </header>
);

export default Header;