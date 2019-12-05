import React, {Component} from 'react';
import firebase from './Firebase';
import Vacancy from './Vacancy'
import { Route, Link } from 'react-router-dom';

class Home extends Component {
	render () {
		return (
            <section className="home">
			<Link to="./Vacancy">New vacancy</Link>
			<Link to="./Candidates">Candidates</Link>
			</section>
		)
	}
}
export default Home;
