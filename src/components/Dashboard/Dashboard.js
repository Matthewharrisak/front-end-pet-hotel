import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetDisplay from '../PetDisplay/PetDisplay';
import PetForm from '../PetForm/PetForm';


class Dashboard extends Component {
    render() {
        return(
            <div>
                <PetForm />
                <PetDisplay />
            </div>
        );
    }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

export default connect(mapStoreToProps)(Dashboard)