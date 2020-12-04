import React, { Component } from 'react';
import { connect } from 'react-redux';


class PetDisplay extends Component {

    componentDidMount = () => {
        this.getPet();
    }

    getPet = () => {
        console.log('this is our state getting all the pets');
        this.props.dispatch({ type: 'FETCH_PETS'});
      }

  render() {
    return (
      <div>
       <h1> pet display</h1>
       <table>
            <thead>
              <tr>
                <th>Owner</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Checked In</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {this.props.store.petReducer.pets.map((pet) => {
                  return <tr key={pet.id}>
                    <td>{pet.owner_id}</td>
                    <td>{pet.name}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.color}</td>
                    <td>{pet.is_checked_in}</td>
                    <td><button>Delete</button><button>Check In</button></td>
                  </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6"></td>
                </tr>
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
export default connect(mapStoreToProps)(PetDisplay);
