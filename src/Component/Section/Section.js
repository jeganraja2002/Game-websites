import React from 'react'
import './Section.scss'
import '../../App.css'
import { FaPaperclip,FaRegGem } from "react-icons/fa";

const Section = () =>{
    return(
            <section className='section'>
                <div className='container w-lg-85 w-sm-100'>  
                    <div className='col-sm-12 col-lg-8 align'>
                        <div>
                            <h1 className='pt-sm-3 pt-md-0 pt-lg-0'>YOUPLAY - GAMING TEMPLATE</h1>
                            <p>You are not limited to the features of this template. It is suitable for gaming site, and for any business project. Pre-packed demos will help you to quickly run your new creative website.</p>
                            <div className='mt-sm-5 row col-sm-12 col-md-7' style={{justifyContent:"space-between"}}>
                                <div className='col-sm-6'>
                                    <button className='btn-Demo'><FaPaperclip/> Demo</button>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn-Purchase'><FaRegGem/> Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
}

export default Section