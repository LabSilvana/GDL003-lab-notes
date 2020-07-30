import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

/*firebase.initializeApp({
    apiKey:"AIzaSyB5omm6vkDXK5tv4qv-4kMw7Ob1XLkkLJQ",
    authDomain:"notesreact-12cc5.firebaseapp.com"
})*/

class AppSignIn extends React.Component{
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOpcion: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
       firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn:!!user})
        })
    }

    
    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <div>Signed In!</div>
                    ) : (
                        <StyledFirebaseAuth 
                        uiConfig={this.uiConfig} 
                        firebaseAuth={firebase.auth()}
                        />
                )}
            </div>
        )
    }
}

   
  
  
  
  
  export default AppSignIn;
  
