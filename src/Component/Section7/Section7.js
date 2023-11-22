import { Component } from "react";
import '../../App.css'
import './Section7.scss'
import { FaAmazon,FaAngular,FaAsymmetrik,FaChrome } from "react-icons/fa";


class Section7 extends Component{
    render(){

        const connect =[
                    {app:<FaAmazon/>,name:"Discord"},
                    {app:<FaAngular/>,name:"Watch on Twitch"},
                    {app:<FaAsymmetrik/>,name:"Youtube"},
                    {app:<FaChrome/>,name:"Twitter"}
                    ]

        return(
            <section className="section7">
                <div className="container w-lg-60 w-m-100">
                    <h1 className="pt-sm-5" style={{textAlign:"center"}}>Connect socially with Youplay</h1>
                    <div className="row">
                        {connect.map((e,i)=>{
                            return(
                                <div className="col-lg-3 col-sm-6 col-md-3 mt-sm-3" key={i}>
                                    <div style={{textAlign:"center"}}>
                                        <div className="font-sm-5 connect">{e.app}</div>
                                        <h6>{e.name}</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                        <h6 className="rights">2020 © Jegan. All rights reserved</h6>
            </section>
        )
    }
}

export default Section7