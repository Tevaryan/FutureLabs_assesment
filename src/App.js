import React from 'react';
import {Route} from "react-router-dom";
import BrowseMentor from './containers/BrowseMentor.js'
import BookingResult from './components/BookingResult.js'
import BookingForm from './components/BookingForm.js'
import './App.css';

function App() {
  return (
    <>
      <Route exact path ={'/Dashboard/BrowseMentor'} component={BrowseMentor}/>
      <Route path ={'/Dashbaord/BrowseMentor/BookingForm'} component={BookingForm}/>
      <Route path ={'/Dashboard/BrowseMentor/BookingForm/BookingResult'} component={BookingResult}/>
    </>
  );
}

export default App;
