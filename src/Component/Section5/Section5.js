import {Component} from 'react'
import '../../App.css'

class Section5 extends Component{
    render(){
        const question =[
                        {name:"Youplay comes with documentation. See here -",link:"https://nkdev.info/docs/"},
                        {name:"Also we provide support for our users through ticket system -",link:" https://nk.ticksy.com/"}
                        ]
        return(
            <section style={{margin:"50px 0px",display:"flex",alignItems:"center"}}>
                <div className='container'>
                    <div className='col-sm-12'>
                        <h1 className='font-sm-5'>Have Any Questions?</h1>
                        {question.map((e,i)=>{
                            return(
                            <div className='row my-sm-3' key={i}>
                                <p className='font-sm-2'>{e.name}</p>
                                <a href='' className='font-sm-2' style={{color:"white"}}>{e.link}</a>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Section5