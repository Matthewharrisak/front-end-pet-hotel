import React, { Component } from 'react';
import { connect } from 'react-redux';


class OwnerTable extends Component {

    componentDidMount = () => {
        // console.log('this is our state' , this.state);
        this.props.dispatch({ type: 'SET_OWNER' });
    }


  render() {
    return (
      <div>
       <h1> owner</h1>

      
       <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Pet</th>
               
              </tr>
            </thead>
            <tbody>
              
            </tbody>
            <tfoot>
              {this.props.store.ownerReducer.owner.map((owner) => {
                  return <tr key={owner.id}>
                  
                    <td>{owner.first_name}</td>
                    <td>{owner.last_name}</td>
                    
                    <td><button>Delete</button><button>Check In</button></td>
                  </tr>
              })}
            </tfoot>
          </table>
        
          </div>
    );
  }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(OwnerTable);
