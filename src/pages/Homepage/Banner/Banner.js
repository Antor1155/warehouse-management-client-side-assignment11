import React from 'react';
import "./Banner.css"
import banner2 from "../../../Images/Background/backgroundOptional.jpg";
import logo from "../../../Images/logos/logo-svg.png";

const Banner = () => {
    return (
        <div className='bannerContainer text-center testing'>
        <section className='banner'>
            <img className='bannerImg testing' src={banner2} alt="" />

            <div className='bannerContent'>
                <img className='logo testing' src={logo} alt="" />
                <h1 className='logoname'><span className='me-3 customRed'>F</span>oo<span className='ms-3 customRed'>D</span></h1>

             <div className='d-flex justify-content-around'>
                 <div className=' testing felxbox'>
                     <h2 className='testing'>Our support section</h2>
                     <p>If you face any difficulty or need help, happy to be contacted. We have a 24 hour support session.
                     </p>
                     <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/md.antor.16
                     "><button className='link-button px-4 py-2'> visit support</button></a>
                     
                 </div>
                 <div className='testing felxbox'>
                     <h2 className='testing'>Our sourcing sides</h2>
                     <p>We have done business over 20 years and around 50 countries. With good experiences comes good sources.</p>
                     <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/md.antor.16
                     "><button className='link-button px-4 py-2'> visit sources</button></a>
                 </div>
             
             </div>    

            </div>

        </section>
     </div>
    );
};

export default Banner;