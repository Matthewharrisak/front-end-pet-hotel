import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {



  render() {
    return (
      <div>
       <h1> this is the header</h1>
          </div>
    );
  }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(Header);
