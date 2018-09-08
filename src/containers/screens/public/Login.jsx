import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import firebaseui from 'firebaseui';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    return false;
  },
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Login);
