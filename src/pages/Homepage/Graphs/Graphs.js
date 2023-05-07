import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "./Graphs.css"

const Graphs = ({ products }) => {
    return (
        <div className='graphs'>
            <h1>Total <span className='customRed'>sotred</span> Amount</h1>
            <p>visualization of <strong className='customRed'>{products.length}</strong> types of producs: available</p>
            <ResponsiveContainer className='chart my-4' width="70%" height={450}>
                <BarChart
                    width={1000}
                    height={500}
                    data={products}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#6661c9" />
                    <Bar dataKey="price" fill="#3b5c80" />
                </BarChart>
              </ResponsiveContainer>
            
            <p className='mb-3'>For more info please visit <span className='text-primary'><strong className='pageLink'><Link to="/manageInventory">Manage Inventory page</Link> </strong></span> Manage Inventory page</p>
            <div className='gradientDivFromWhite'></div>
        </div>
    );
};

export default Graphs;