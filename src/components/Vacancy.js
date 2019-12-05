import React, { Component } from 'react';
import firebase from './Firebase';
import { Redirect, Link } from 'react-router-dom';
import VacancyCss from './Vacancy.css'


class Vacancy extends Component {
   
    render() {
       
            return (
                <section className="Vacancy">
                  <p>Job Title</p>
                  <input></input>
                  <p>Job description and requirements</p><textarea rows="20" cols="80"></textarea>
                  <div>
                  <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/fb_icon-icons.com_65434.png"></img>
                  <img src="https://image.flaticon.com/icons/png/512/61/61109.png"></img>
                  <img src="https://media.cdnandroid.com/5d/92/ee/22/51/imagen-empregos-0thumb.jpg"></img>
                  </div>
                  <h1><Link to="./">Send</Link></h1>
                </section>
            )
        }       
    
}
export default Vacancy;