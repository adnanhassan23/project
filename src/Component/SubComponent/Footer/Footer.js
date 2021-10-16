import React from 'react';
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';


const Footer = () => {
    const style = { color: "#AFAFAF", marginRight: '17px'}
    return (
        // <div className="container mt-5">
        <div className="Footer-Container mt-2">
        <div className="container ">
            <div className="row">
                <div className="col-md-6 text-center text-start">
                    <ul className="nav d-flex justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link footerText" href="#">About Community</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link footerText" href="#">Trading</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link footerText" href="#">Charts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link footerText" href="#">NewsCrypto.io</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 text-center my-2 text-lg-end">
                 <FaTwitter style={style} className="footerText footerIcon" size='20px' /> <FaInstagram style={style} className="footerText footerIcon" size='20px' />  <FaFacebookF style={style} className="footerText footerIcon" size='20px' /> <FaYoutube style={style} className="footerText footerIcon" size='20px' /> <FaLinkedinIn style={style}  className="footerText footerIcon" size='20px' /> <FaTelegramPlane style={style} className="footerText footerIcon" size='20px' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;