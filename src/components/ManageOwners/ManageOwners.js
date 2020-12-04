import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerForm from '../OwnerForm/OwnerForm';
import OwnerTable from '../OwnerTable/OwnerTable';

class ManageOwners extends Component {
    render() {
        return(
            <div>
                <OwnerForm />
                <OwnerTable />
            </div>
        );
    }
}

// Redux
const mapStoreToProps = (store) => ({
    store
});

export default connect(mapStoreToProps)(ManageOwners)