import React, {Component} from 'react';
import HomeCss from './Home.css'
import { Route, Link } from 'react-router-dom';
import hrLogo from '../AstraLab/hrLogo.png' 
import TSH from '../AstraLab/tshLogo.png'
class Home extends Component {
    render () {
        return (
            <section className="home">
                <img className="hrLogo" src={hrLogo}></img>
                <div className="btnContainer">
                    <Link to="./Vacancy"><button className="homeBtn">NEW VACANCY</button></Link>
                    <Link to="./Candidates"><button className="homeBtn">CANDIDATES</button></Link>
                </div>
                <img className="tsh" src={TSH}></img>   
            </section>
        )
    }
}
export default Home;