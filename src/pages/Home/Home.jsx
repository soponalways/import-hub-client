import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestProducts from '../../components/LatestProducts/LatestProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProducts/>
        </div>
    );
};

export default Home;