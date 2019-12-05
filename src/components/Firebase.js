import * as firebase from 'firebase'

let config = {
 
};

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}
export default firebase;