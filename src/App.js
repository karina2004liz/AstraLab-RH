import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home';
import Vacancy from './Components/Vacancy';
import Candidates from './Components/Candidates';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';

class App extends Component {
	render () {
		return (
			<HashRouter>
				<Switch>
					<Router>
						<div className="App">
							<Route exact path="/" component={Home} />
							<Route path="/register" component={Vacancy} />
							<Route path="/reset-password" component={Candidates} />
						</div>
					</Router>
				</Switch>
			</HashRouter>
        );
    }
}
export default App;