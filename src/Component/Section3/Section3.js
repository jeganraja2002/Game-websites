import {Component} from 'react'
import '../../App.css'

class Section3 extends Component{
    render(){
        const games = [
                        {name:"Dark",version:"demo",img:"https://html.nkdev.info/youplay/assets/images/demo-dark.jpg"},
                        {name:"Shooter",version:"demo",img:"https://html.nkdev.info/youplay/assets/images/demo-shooter.jpg"},
                        {name:"Anime",version:"demo",img:"https://html.nkdev.info/youplay/assets/images/demo-anime.jpg"},
                        {name:"Light",version:"demo",img:"https://html.nkdev.info/youplay/assets/images/demo-light.jpg"}
        ]
        return(
            <section className='my-sm-5'>
                <div className='container w-lg-60 w-sm-100'>
                    <h1 style={{textAlign:"center"}} className='font-sm-5'>Youplay Comes with 4 Demo</h1>
                    <div className='row'>
                        {games.map((e,i)=>{
                            return( 
                                <div className='col-lg-6 col-sm-12 col-md-6' key={i}>
                                    <div className='mt-sm-5'>
                                        <img src={e.img} style={{width:"100%"}}/>
                                        <h3 style={{textAlign:"center"}}>{e.name} <span style={{fontSize:"13px",color:"gray"}}>{e.version}</span></h3>
                                    </div>
                                </div>
                                )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Section3