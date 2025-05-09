import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Zainab from './Zainab';
const Home2 = () => {
    return (
        <>
            <div className='Footer'>
                <div className='row'>
                    <div className='col-md-4' > 
                        <h5>Contact Us</h5><br/>
                        <p> <LocationOnIcon/>21 Km Ferozpur Road Lahore Pakistan.</p><br/>
                        <p>  <EmailIcon/>zainab@gmail.com</p><br/>
                        <p> <PhoneIcon/>0138458568906</p>
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                            <h5>Information</h5><br/>
                            <a href=''>Blogs</a><br/><br/>
                            <a href=''>About us</a><br/><br/>
                            <a href='' >Catalogues</a><br/><br/>
                            <a href=''>Privacy Policy</a><br/><br/>
                            <a href=''>Terms & Conditions</a><br/><br/>
                            </div>
                            <div className='col-md-6'>
                            <h5>  Customer Services</h5><br/>
                            <a href=''>FAQs</a><br/><br/>
                            <a href=''>Order Tracking</a><br/><br/>
                            <a href=''>Store Locator</a><br/><br/>
                            <a href=''>Contact Us</a><br/><br/>
                            <a href=''>Return & Exchange</a><br/><br/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' >
                    <h5>Newsletter Signup</h5><br/>
                    <p>Subscribe to our newsletter and get latest updates.</p><br/>
                    <div className="newsletter">
                            <input type="email" name="email" placeholder='Your Email address' />
                            <button>Subscribe</button>
                        </div><br/>
                        <FacebookIcon className="icon" />
                        <InstagramIcon className="icon" />
                        <YouTubeIcon className="icon" />
                    </div>
                </div>
            </div>
            <div>
                <hr></hr>
                <p className="copy">Copyright © 2024 Organic. All rights reserved.</p>
            </div>
        </>
    );
}

export default Home2;

