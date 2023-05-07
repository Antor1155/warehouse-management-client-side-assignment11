import React from 'react';
import "./Banner.css"
import banner2 from "../../../Images/Background/backgroundOptional.png";
import logo from "../../../Images/logos/logo-svg.png";

const Banner = () => {
    return (
        <div className='bannerContainer text-center'>

            <div className='bannerContent' style={{
                backgroundImage: `url(${banner2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '70%'}}>

                <div>
                    <img className='logo mx-auto' src={logo} alt="" />
                    <h1 className='logoname'><span className='me-3 customRed'>F</span>oo<span className='ms-3 customRed'>D</span></h1>
                </div>


                <div className='d-flex justify-content-around BannerTextDiv'>
                    <div className='felxbox'>
                        <h2 className=' '>Our support section</h2>
                        <p>If you face any difficulty or need help, happy to be contacted. We have a 24 hour support session.
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-antor/
                     "><button className='customButton px-4 py-2'> visit support</button></a>

                    </div>
                    <div className='felxbox'>
                        <h2 className=' '>Our sourcing sides</h2>
                        <p>Business over 20 years and around 50 countries. With good experiences comes good sources.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Antor1155/warehouse-management-client-side-assignment11
                     "><button className='customButton px-4 py-2'> visit sources</button></a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;