import React, { Component } from 'react';
import firebase from './Firebase';
import "firebase/database";
import fireConfig from './Firebase';



class Junior extends Component{


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
          test: snap.val().test
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
                    return(
                        <h1>{can.name}</h1>
                    )
                })

                }
            </div>
        )

    }

}

export default Junior
