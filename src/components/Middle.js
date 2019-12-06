import React, { Component } from 'react';
import "firebase/database";
import fireConfig from './Firebase';
import { Redirect, Link } from 'react-router-dom';



class Middle extends Component{


constructor(){
    super();

    this.db = fireConfig.database().ref().child("Candidates"); 

    this.state = {
        candidates:[]
    };


}

componentWillMount(){

    const prevNotes = this.state.candidates;



    this.db.on("child_added", snap => {
        prevNotes.push({
          id: snap.key,
          email: snap.val().email,
          levelenglish: snap.val().levelenglish,
          name: snap.val().name,
          test: snap.val().testlevel
        });
  
        this.setState({
          candidates: prevNotes
        });
      });
  
      this.db.on("child_removed", snap => {
        for (var i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].noteId === snap.key) {
            prevNotes.splice(i, 1);
          }
        }
  
        this.setState({
          candidates: prevNotes
        });
      });
  
      this.db.on("child_changed", snap => {
        for (var i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].noteId === snap.key) {
            prevNotes[i] = snap.val();
          }
        }
  
        this.setState({
          candidates: prevNotes
        });
      });
}


    render(){
        return(
            <div>
                {this.state.candidates.map(can =>{

                    if(can.test == "middle")

                    return(
                        <div>
                        <h1>Name: {can.name}</h1>
                        <h2>Email: {can.email}</h2>
                        <h2>English level: {can.levelenglish}</h2>
                        <h3>Level Test: {can.test}</h3>
                        </div>
                    )
                })

                }

        <div><Link to="./Candidates">Volver</Link></div>
            </div>
        )

    }

}

export default Middle