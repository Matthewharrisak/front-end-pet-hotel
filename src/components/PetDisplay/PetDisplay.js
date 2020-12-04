import React, { Component } from 'react';
import { connect } from 'react-redux';


class PetDisplay extends Component {

    componentDidMount = () => {
        this.getPet();
        this.getOwners();
    }

    getPet = () => {
        console.log('this is our state getting all the pets');
        this.props.dispatch({ type: 'FETCH_PETS'});
      }
    
    getOwners = () => {
      this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    renderName = (petId) => {
      let ownerIndex = this.props.store.ownerReducer.owners.find(owner => owner.id === petId);
      console.log(ownerIndex);
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
                    {this.renderName(pet.owner_id)}
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

// {this.props.store.ownerReducer.owner.map((owner) => {
//   if(owner.id === pet.owner_id) {
//     return <td>{owner.first_name}</td>
//   }
// }