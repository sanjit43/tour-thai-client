import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Client from '../ClientSatisfaction/Client';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Body></Body>
            <Client></Client>
        </div>
    );
};

export default Home;