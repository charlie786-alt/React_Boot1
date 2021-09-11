import React,{useState} from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
function Navbar() {
    const [showLink, setShowLink] = useState(false);
    const handleClick = ()=>{
        setShowLink(!showLink);
    }
    return (
        <>
            <div className="navi">
                <img src="./images/download.png" alt="logo" />
                <div className="nav_links">
                    <ul>
                        <li><a href="#" >Home</a> </li>
                        <li><a href="#">Services</a> </li>
                        <li><a href="#">Contact Us</a> </li>
                        <li><a href="#">About Us</a> </li>
                       
                    </ul>
                    
                </div>
                <div className="icons" onClick={handleClick} >
                    <FaBars/>
                </div>

                <div className="btns">
                  <input type="text"  />
                    <button className="btn2"> <span>Find</span></button>
                </div>

               
               

            </div>
          

        </>
    )
}

export default Navbar
