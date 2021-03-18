import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC045C_s-FnDQ1CMYj-typr2SXcOosRvxg",
    authDomain: "info-340-project-2-38a8c.firebaseapp.com",
    databaseURL: "https://info-340-project-2-38a8c-default-rtdb.firebaseio.com",
    projectId: "info-340-project-2-38a8c",
    storageBucket: "info-340-project-2-38a8c.appspot.com",
    messagingSenderId: "599162220082",
    appId: "1:599162220082:web:a7018dc64f79cd077a162b",
    measurementId: "G-SGW0D2VRFK"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
            <title>Video Game Reviews</title>
      </Helmet>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
