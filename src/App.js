import React, {Component} from 'react';
import Home from './components/Home';
import Vacancy from './components/Vacancy';
import Candidates from './components/Candidates';
import Junior from './components/Junior';
import Middle from './components/Middle';
import Senior from './components/Senior';
import NoLevel from './components/NoLevel';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
class App extends Component {
	render () {
		return (
			<HashRouter>
				<Switch>
					<Router>
						<div className="App">
							<Route exact path="/home" component={Home} />
							<Route exact path="/Vacancy" component={Vacancy}/>
							<Route exact path="/Candidates" component={Candidates}/>
							<Route exact path="/Junior" component={Junior}/>
							<Route exact path="/Middle" component={Middle}/>
							<Route exact path="/Senior" component={Senior}/>
							<Route exact path="/NoLevel" component={NoLevel}/>
						</div>
					</Router>
				</Switch>
			</HashRouter>
        );
    }
}
export default App;