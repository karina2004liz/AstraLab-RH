import React, {Component} from 'react';
import Home from './Home';
import Vacancy from './Vacancy';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
class App extends Component {
	render () {
		return (
			<HashRouter>
				<Switch>
					<Router>
						<div className="App">
							<Route exact path="/" component={Home} />
							<Route path="/Vacancy" component={Vacancy} />
						</div>
					</Router>
				</Switch>
			</HashRouter>
        );
    }
}
export default App;