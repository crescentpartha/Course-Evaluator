import React from 'react';
import Facilities from './Facilities/Facilities';
import Affiliations from './Affiliations';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div>
                <Facilities></Facilities>
            </div>
            <div>
                <Affiliations></Affiliations>
            </div>
        </div>
    );
};

export default Home;