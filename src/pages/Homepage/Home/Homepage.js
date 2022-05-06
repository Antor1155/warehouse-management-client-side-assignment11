import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import Management from '../Management/Management';
import TinyInventory from '../TinyInventory/TinyInventory';
import "./Homepage.css";


const Homepage = () => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])


    return (
        <div>
            <Banner></Banner>
            <TinyInventory products={products}></TinyInventory>
            <Graphs products={products}></Graphs> 
            <Management></Management> 
        </div>
    );
};

export default Homepage;