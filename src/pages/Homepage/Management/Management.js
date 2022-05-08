import React from 'react';
import "./Management.css";
import wroker1 from "../../../Images/Workers/worker.jpg";
import wroker2 from "../../../Images/Workers/worker2.jpg";


const Management = () => {
    return (
        <div className='management mx-auto'>
            <h1 className='text-center mb-5 pb-4'>Management</h1>
            <div className='flexedManagement mb-5 d-md-flex flex-row-reverse justify-content-around align-items-center'>
                <img src={wroker1} alt="" />
                <div>
                    <h3 className='customRed'>James Robert</h3>
                    <p>Office manager,</p>
                    <p>Food first Company & limited</p>
                    <blockquote><small> "your work defines who you are <br /> and you derermines what you work" </small></blockquote>
                </div>

            </div>
            <div className='flexedManagement specialChild d-md-flex justify-content-around align-items-center'>
                <img src={wroker2} alt="" />
                <div>
                    <h3 className='customRed'>Jennifer Cherri</h3>
                    <p>Branch manager,</p>
                    <p>Food first Company & limited</p>
                    <blockquote><small> "do what you love <br /> and love what you do" </small></blockquote>
                    
                </div>

            </div>
        </div>
    );
};

export default Management;