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
							<Route exact path="/" component={Home} />
							<Route path="/Vacancy" component={Vacancy}/>
							<Route path="/Candidates" component={Candidates}/>
							<Route exact path="/Candidates/Junior" component={Junior}/>
							<Route exact path="/Candidates/Middle" component={Middle}/>
							<Route exact path="/Candidates/Senior" component={Senior}/>
							<Route exact path="/Candidates/NoLevel" component={NoLevel}/>
						</div>
					</Router>
				</Switch>
			</HashRouter>
        );
    }
}
export default App;