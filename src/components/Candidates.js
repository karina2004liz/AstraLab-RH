import React, { Component } from 'react';
import firebase from './Firebase';
import { Redirect, Link } from 'react-router-dom';


class Candidates extends Component {
   
    render() {
       
            return (
                <section className="Vacancy">
                    <Link to="./Junior">Junior</Link>
                    <Link to="./Middle">Middle</Link>
                    <Link to="./Senior">Senior</Link>
                    <Link to="./NoLevel">No level</Link>
                    <Link to="./">Volver</Link>
                </section>
            )
        }       
    
}
export default Candidates;