import React from 'react';
import Banner from '../Banner/Banner';
import TinyInventory from '../TinyInventory/TinyInventory';
import "./Homepage.css";


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <TinyInventory></TinyInventory>
        </div>
    );
};

export default Homepage;