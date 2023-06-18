import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import Management from '../Management/Management';
import TinyInventory from '../TinyInventory/TinyInventory';

const Homepage = (props) => {
    if (props.setNotFoundPage) {
        props.setNotFoundPage(false);
    }

    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-erin-dibbler-cap.cyclic.app/home')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, [])

   
    return (
        <div className='homepage'>
           
            <Banner></Banner>
            {products.length===0 ? <Loading></Loading>: <TinyInventory products={products}></TinyInventory>}
            
            <Graphs products={products}></Graphs>
            <Management></Management>
        </div>
    );
};

export default Homepage;