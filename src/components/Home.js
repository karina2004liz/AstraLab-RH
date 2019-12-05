import React, {Component} from 'react';
import HomeCss from './Home.css'
import { Route, Link } from 'react-router-dom';

class Home extends Component {
	render () {
		return (
            <section className="home">
				<div className="link"><Link to="./Vacancy">New vacancy</Link></div>
				<div className="link"><Link to="./Candidates">Candidates</Link></div>
			</section>
		)
	}
}
export default Home;
