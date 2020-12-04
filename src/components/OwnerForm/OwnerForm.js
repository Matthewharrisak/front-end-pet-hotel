import React, { Component } from 'react';
import { connect } from 'react-redux';


class OwnerForm extends Component {
 
    // state is creating our event object - the values will be populated on the form in the Render() section of this component
    state={
        new_owner:{
            first_name: '',
            last_name: '',
        }
    }
      // this function will handle the values from the event form and use those values to setState
    handleChange= (keyname, event) => {
    event.preventDefault();
    
    this.setState({
        new_owner:{
        ...this.state.new_owner,
        [keyname]: event.target.value,
    }});
    }

    // onClick this function will fire off our new state object
    newOwner = () => {
        console.log('this is our state' , this.state);
        this.props.dispatch({ type: 'NEW_OWNER' , payload: this.state.new_owner});
    }


    render() {
        return(

            <form onSubmit={this.newOwner}>
                <h1> NEW OWNER </h1>

                <input required onChange={(event) => this.handleChange( 'first_name' , event)} 
                    type="text" id="" placeholder='first name'/>

                <input onChange={(event) => this.handleChange( 'last_name' , event)} 
                    type="text" id="" placeholder='last name'/>

                                                
                <button className='newOwner'> submit</button>      
            </form>
        );
    }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

export default connect(mapStoreToProps)(OwnerForm)