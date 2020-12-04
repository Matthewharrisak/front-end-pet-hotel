import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';


class App extends Component {

  componentDidMount = () => {
    this.getPet();
    this.getOwner();
  }

  getPet = () => {
    console.log('this is our state getting all the pets');
    this.props.dispatch({ type: 'FETCH_PETS'});
  }

  getOwner = () => {
    this.props.dispatch({ type: 'FETCH_OWNER'});
  }

  clickPetsRoute = () => {
    this.props.dispatch({ type: 'FETCH_PETS' , history: this.props.history});
    console.log('clcik')
  }

  render() {
    return (
      <Router>
      <div>
        {JSON.stringify(this.props.store.petReducer)}
        {JSON.stringify(this.props.store.ownerReducer)}
          <Header/>
          <button onClick={this.clickPetsRoute}></button>
          <Route exact path='/pet' component={Dashboard} />
          <Route exact path='/owner' component={ManageOwners} />
      </div>
      </Router>
    );
  }
}



// Redux
const mapStoreToProps = (store) => ({
    store
});

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(App);
