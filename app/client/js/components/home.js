import React from 'react';

// Components
import Search from './search';
import Tiles from './tiles';

const Home = (props) => (
    <div>
        <Search {...props}/>
        <Tiles {...props}/>
    </div>
);

export default Home;
