import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])
    const {id} = useParams();
    return (
        <div>
            <h2>this is inventory page {id}</h2>
        </div>
    );
};

export default Inventory;