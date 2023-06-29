import React from 'react';
import Facilities from './Facilities/Facilities';
import Affiliations from './Affiliations';
import PageTitle from '../Shared/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
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