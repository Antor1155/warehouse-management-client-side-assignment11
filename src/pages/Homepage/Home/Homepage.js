import React from 'react';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import TinyInventory from '../TinyInventory/TinyInventory';
import "./Homepage.css";


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <TinyInventory></TinyInventory>
            <Graphs></Graphs>
            
        </div>
    );
};

export default Homepage;