import {Component} from 'react'
import '../../App.css'
import './Section4.scss'
import {FaRegPaperPlane,FaHistory,FaExclamationTriangle} from "react-icons/fa";

class Section4 extends Component{
    render(){

        const feature = [
                        {icons:<FaExclamationTriangle/>,name:"Clan Wars",content:"Manage battles in the games. Add teams and fights."},
                        {icons:<FaHistory/>,name:"Clan Wars",content:"Manage battles in the games. Add teams and fights."},
                        {icons:<FaRegPaperPlane/>,name:"Clan Wars",content:"Manage battles in the games. Add teams and fights."}
                        ]

        return(
            <section className='Section4 vh-100'>
                <div className='container'>
                <h1 className='font-sm-5'>A BIT MORE FEATURES</h1>
                    <div className='row'>
                        {feature.map((e,i)=>(
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
}

export default Section4