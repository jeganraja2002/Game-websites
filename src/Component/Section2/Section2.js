import React from 'react'
import '../../App.css'
import './Section2.scss'
import { FaRss,FaUserFriends,FaTruckPickup } from "react-icons/fa";

const list=[
            {name:"Blog",
            content:"Youplay can be used for simple blogging, not only full-stack gaming template.",
            icons:<FaRss/>},

            {name:"Store",
            content:"If you want to sale goods, let's do it. This is so easy with Youplay.",
            icons:<FaTruckPickup/>},
            
            {name:"Social Network",
            content:"Build your gaming social network, or forum for Clan members.",
            icons:<FaUserFriends/>}
            ]

const Section2 = ( ) => {
    return(
        <section className='section2'>
            <div className='container'>
                <div className='row'>
                    {list.map((e,i)=>(
                        <div className='col-lg-4 col-sm-12 mt-sm-5' key={i}>
                            <div style={{textAlign:"center"}} className='p-sm-3 skew'>
                                <h1 className='font-sm-5'>{e.icons}</h1>
                                <h1 className='my-sm-1'>{e.name}</h1>
                                <p>{e.content}</p>
                            </div>
                        </div>
                    ))}        
                </div>
            </div>
        </section>
    )
}
export default Section2