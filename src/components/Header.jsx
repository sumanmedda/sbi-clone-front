import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    const img1 = "https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png"
    const img2 = "https://www.equitypandit.com/wp-content/uploads/2021/06/SBI-Net-Banking.jpg"
    
    return <>
        <div className="container text-center">
            <div className="row custom-img-container">
                <img src={img1} style={{height:"60px", width:"115px"}} alt="" />
                <img src={img2} alt="" className="img2-custom" />
            </div>
        </div>
        <nav>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
            <li>
                <Link to="/" >Home</Link>
                </li>
                <li>
                <Link to="/" >About</Link>
                </li>
                <li>
                <Link to="/">Services</Link>
                </li>
                <li>
                <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Header
