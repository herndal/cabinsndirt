import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

//TESTING
import { 
  getLocations 
} from './actions/location_actions'
//TESTING


document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();

  //TESTING
  window.getLocations = getLocations;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
})