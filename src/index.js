import React, {  useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route, useLocation,  useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import firebase from './firebase';
import { Provider,useDispatch } from 'react-redux';
import store from './redux/storeConfig';
import { setUser, cleaUSer } from './redux/arada/action/action';

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
       dispatch(setUser(user));
        navigate({
          pathname:  "/",
          state: {
            response: 'User already in....' 
          } 
       });
      }
      else{
        navigate({
          pathname:"/login",
        })
        dispatch(cleaUSer());
      }
    });
  },[dispatch]);
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
  <Provider store={store}>
     <Router>
  <Root/>
  </Router>
  </Provider>
 
);


