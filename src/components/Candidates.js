import React, { Component } from 'react';
import firebase from './Firebase';
import { Redirect, Link } from 'react-router-dom';
import CandidatesCss from './Candidates.css'

class Candidates extends Component {
   
    render() {
       
            return (
                <section className="Candidates">
                    <div><Link to="/Junior">Junior</Link></div>
                    <div><Link to="/Middle">Middle</Link></div>
                    <div><Link to="/Senior">Senior</Link></div>
                    <div><Link to="/NoLevel">No level</Link></div>
                    <div><Link to="./">Volver</Link></div>
                </section>
            )
        }       
    
}
export default Candidates;