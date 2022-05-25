import React, {  useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route, useLocation,  useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import firebase from './firebase';


const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate({
          pathname:  "/",
          state: {
            response: 'User already in....' 
          } 
       });
      }
    });
  });
    return (
      <Routes>
     <Route path="/" element={<App />} /> 
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>} />
      </Routes>
    );
  const RootWithAuth = useLocation(Root);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Root/>
  </Router>
);


