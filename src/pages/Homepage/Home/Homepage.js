import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import Management from '../Management/Management';
import TinyInventory from '../TinyInventory/TinyInventory';

const Homepage = (props) => {
    // console.log('coming', props.setNotFoundPage);
    if (props.setNotFoundPage){
        props.setNotFoundPage(false);
    }

    const [products, setproducts] = useState([]);
    useEffect(() => {
        document.body.style = 'background:black;';
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setproducts(data));
        
    }, [])

    return (
        <div className='homepage'>
            <Banner></Banner>
            <TinyInventory products={products}></TinyInventory>
            <Graphs products={products}></Graphs> 
            <Management></Management> 
        </div>
    );
};

export default Homepage;