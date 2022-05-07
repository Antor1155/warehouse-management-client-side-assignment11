import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    const {id} = useParams();

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/fakeData.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))

        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])
    
    const product = allProducts.find(data => data.id === id);

    console.log(allProducts);
    console.log(product);
    return (
        <div>
            <h2>this is inventory page {id}</h2>
            <p>{product?.name}</p>
        </div>
    );
};

export default Inventory;