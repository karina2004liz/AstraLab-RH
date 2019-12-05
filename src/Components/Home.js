import React, {Component} from './node_modules/react';
import firebase from './Firebase';
import { Route, Link } from './node_modules/react-router-dom';
import Vacancy from './Components/Vacancy';
import Candidates from './Components/Candidates'

class Home extends Component {
    render(){
        return(
            <div>
                <div> <p>Hola</p></div>
                <Link className="Vacancy" to="/Vacancy">Vacancy</Link>
                <Link className="Candidates" to="/Candidates">Candidates</Link>
            </div>
           
        )
    }
}
    export default Home;