import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { MdArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function Home(){
    const [open, setIsOpen] = useState(false);
    const openForm = () => setIsOpen(!open);

    const img1 = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUPZSJ17BIZ97h7rQiFeEmaG7dl7vzA8ohdVilwWiq9YrqXZyA"
    const img2 = "https://www.onlinesbi.sbi/sbijava/images/ybbi_corp.png"
    return(
    // 1st PArt
    <center className="custom-home-container">
        <div className="container text-center">
            <div className="row blink-text">
                <div className="col-sm-12 custom-home-container">
                    <span className="cache_blink" style={{margin:"10px", fontSize: "12px"}}>If slowness is observed during Login Page loading, please refresh the 	page for better experience.</span>
                    <div style={{marginTop:"10px", fontSize: "10px", fontWeight:"500", color:"#2441E5"}}>SBI never asks for confidential information such as PIN and OTP from customers. Any such call can be made only by a fraudster. Please do not share personal info.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm custom-home-container custom-middle-box">
                    <img src={img1} alt="" className="personal_icon"/>
                        <center>
                            PERSONAL BANKING
                            <br /><br />
                            <div className="" onClick={openForm}>
                                <Link to="/" className="custom-btn" hidden={open}>Login</Link>
                                <Link to="/" className="custom-btn2" hidden={open}><MdKeyboardDoubleArrowRight /></Link>
                            </div>
                            <Modal open={open}/>
                            <br />
                        </center>
                        <div>
                            <span className="item-text"><BsFillPersonFill style={{height:"12px", width:"12px"}}/> New User</span>
                            <span className="item-text"><HiMiniQuestionMarkCircle style={{height:"12px", width:"12px"}}/> How Do I</span>
                            <span className="item-text"><RiCustomerService2Line style={{height:"12px", width:"12px"}}/>Customer Care</span>
                            <span className="item-text"><FaUnlockAlt style={{height:"12px", width:"12px"}}/>Lock & Unlock User</span>
                        </div>
                        <br />
                        <div style={{fontSize:"12px"}}>
                            SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.
                        </div>
                </div>
                <div className="col-sm custom-home-container custom-middle-box">
                    <img src={img2} alt="" style={{width: "180px"}} className="personal_icon"/>
                        <center>
                            CORPORATE BANKING
                            <br /><br />
                            <div className="">
                                <Link to="/" className="custom-btn">Login</Link>
                                <Link to="/" className="custom-btn2" ><MdKeyboardDoubleArrowRight /></Link>
                            </div>
                            <br />
                        </center>
                        <div style={{fontSize:"12px"}}>
                            Have you tried our new simplified and intuitive business banking platform? Log in to yonobusiness.sbi to avail business banking services.
                        </div>
                        <div>
                            <span className="item-text"><BsFillPersonFill style={{height:"12px", width:"12px"}}/> New User</span>
                            <span className="item-text"><HiMiniQuestionMarkCircle style={{height:"12px", width:"12px"}}/> How Do I</span>
                            <span className="item-text"><RiCustomerService2Line style={{height:"12px", width:"12px"}}/>Customer Care</span>
                            <span className="item-text"><FaUnlockAlt style={{height:"12px", width:"12px"}}/>Lock & Unlock User</span>
                        </div>
                        <br />
                        <div style={{fontSize:"12px"}}>
                            Corporate Banking application to administer and manage non personal accounts online.
                        </div>
                </div>
            </div>
        </div>
        {/* 2nd Part */}
        <div className="marquee-text">
            <Marquee>
            <p>PPF ACCOUNT OPENING IS NOW AVAILABLE ON YONO - <a id="ppfAcclink" href="javascript:void(0)" data-toggle="modal" data-target="#ppfAccOpeningYono">Click here</a> &nbsp;&nbsp;|&nbsp;&nbsp; Mandatory Profile password change after 365 days introduced for added security. &nbsp;&nbsp;|&nbsp;&nbsp; Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre. &nbsp;&nbsp;|&nbsp;&nbsp; SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details.</p>
            </Marquee>
        </div>
        {/* 3rd Part */}
        <div className="container" style={{marginBottom:"20px"}}>
            <div className="row">
                <div className="col-sm bottom-links-custom" >
                    <li><MdArrowRight />RBI Retail Direct portal </li>
                    <li><MdArrowRight />DoorStep Banking</li>
                    <li><MdArrowRight />NRI Services</li>
                    <li><MdArrowRight />SBI Mutal Fund</li>
                </div>
                <div className="col-sm bottom-links-custom">
                    <li><MdArrowRight />Block ATM Card</li>
                    <li><MdArrowRight />SBI General Insurance</li>
                    <li><MdArrowRight />Fair Lending Page</li>
                    <li><MdArrowRight />SBI Life Insurance</li>
                </div>
                <div className="col-sm bottom-links-custom">
                    <li><MdArrowRight />Regsister Complaint</li>
                    <li><MdArrowRight />SBI FasTag</li>
                    <li><MdArrowRight />SBI Securities</li>
                    <li><MdArrowRight />SBI CARD</li>
                </div>
            </div>
        </div>
        {/* 4th part */}
        <center className="custom-link-button" style={{color:"#005C7A"}}>
            <MdKeyboardArrowDown />  More Usefull Links
        </center>
    </center>
    )
}
import { useState } from "react";

export default Home