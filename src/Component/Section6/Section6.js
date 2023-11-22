import {Component} from 'react'
import './Section6.scss'
import '../../App.css'

class Section6 extends Component{
    render(){
        return(
            <section className='section6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div style={{textAlign:"center"}}>
                                <h1>PURCHASE TODAY FOR $23</h1>
                                <p>If you interested in WordPress version, see it here - <a href=''>https://themeforest.net/item/youplay-gaming-wordpress-theme/11959042</a></p>
                                <button className='skew'>Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section6