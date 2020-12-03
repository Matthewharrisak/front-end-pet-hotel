import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  // state is creating our event object - the values will be populated on the form in the Render() section of this component
    state={
        new_pet:{
            name: '',
            breed: '',
            color: '',
            is_checked_in: '',
        }
    }

    componentDidMount = () => {
      this.getPet();
    }

      // this function will handle the values from the event form and use those values to setState
    handleChange= (keyname, event) => {
        event.preventDefault();
        
        this.setState({
          new_pet:{
            ...this.state.new_pet,
            [keyname]: event.target.value,
        }});
     }

      // onClick this function will fire off our new state object
     addPet = () => {
         console.log('this is our state' , this.state);
         this.props.dispatch({ type: 'NEW_PET' , payload: this.state});
    }

    getPet = () => {
      console.log('this is our state getting all the pets');
      this.props.dispatch({ type: 'FETCH_PETS'});
    }

  render() {
    return (
      <div>
          <form onSubmit={this.addPet}>
              <h1> NEW PET </h1>

                <input required onChange={(event) => this.handleChange( 'name' , event)} 
                    type="text" id="" placeholder='name'/>

                <input onChange={(event) => this.handleChange( 'breed' , event)} 
                                    type="text" id="" placeholder='breed'/>

                <input  onChange={(event) => this.handleChange( 'color' , event)} 
                                    type="text" id="color" placeholder='color'/>

                <input onChange={(event) => this.handleChange( 'is_checked_in' , event)} 
                                                    type="text" id="is_checked_in" placeholder='is_checked_in'/>
                  <button className='newPet'> submit</button>
           
           
                  
          </form>

          {JSON.stringify(this.props.store.petReducer)}
          </div>
    );
  }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(App);
