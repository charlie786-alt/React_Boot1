import React from 'react'
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 col-lg-3 footer1 ">
                            <h1>Dealings</h1>
                            <ul >
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 footer1">
                            <h1>Our Reach</h1>
                            <ul >
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 footer1">
                       
                               <h1 >Dealings</h1>
                         
                            <ul >
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                                <li><a href="#"><h3>Home</h3> </a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 footer1">
                            <h1>Socials</h1>
                            <ul >
                                <li><a href="#"><FaInstagram className="iconn"/> </a></li>
                                <li><a href="#"><FaFacebook className="iconn"/> </a></li>
                                <li><a href="#"><FaYoutube className="iconn"/></a></li>
                                <li><a href="#"> <FaTwitter className="iconn"/> </a></li>
                            </ul>
                        </div>
                        <hr  className="hr"/>
                    </div>
                   
                </div>
      
            </div>
          

        </>
    )
}

export default Footer
