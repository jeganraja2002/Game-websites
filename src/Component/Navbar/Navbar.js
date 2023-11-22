import React from "react"
import "./Navbar.scss"
import Youplay from '../../Img/nav-logo.png'
import '../../App.css'
import { FaCaretDown,FaUserAlt,FaSistrix,FaOpencart,FaBars } from "react-icons/fa";

const Navbar = () =>{
    return(
            <header className="Header">
                <div className="container">
                    <div className="row align">
                        
                        <div className="row col-lg-6 col-sm-6 align">        
                            <div className=" col-lg-4 col-sm-12">
                                <img src={Youplay} style={{width:"100%"}}/>
                            </div>
                            <div className="col-lg-8 d-sm-none d-lg-block">
                                <ul className="row">
                                    <li>STORE <span style={{padding:"1px 2px"}}><FaCaretDown/></span></li>
                                    <li>BLOG <span style={{padding:"1px 2px"}}><FaCaretDown/></span></li>
                                    <li>FEATURES <span style={{padding:"1px 2px"}}><FaCaretDown/></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-2">
                            <div className="d-sm-none d-lg-block">
                                <ul className="row">
                                    <li>KUROKY</li>
                                    <li><FaOpencart/></li>
                                    <li><FaSistrix/></li>
                                    <li><FaUserAlt/></li>
                                </ul>
                            </div>
                            <div className="d-lg-none">
                                <span className="font-md-4"x><FaBars/></span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
    )
}

export default Navbar