import React, {Component} from 'react';
import HomeCss from './Home.css'
import { Route, Link } from 'react-router-dom';
import hrLogo from '../AstraLab/hrLogo.png' 
import TSH from '../AstraLab/tshLogo.png'
class Home extends Component {
	render () {
		return (
            <section className="home">
				<img src={hrLogo}></img>
				<div className="link"><Link to="./Vacancy">New vacancy</Link></div>
				<div className="link"><Link to="./Candidates">Candidates</Link></div>
				<img className="tsh" src={TSH}></img>	
			</section>
		)
	}
}
export default Home;
