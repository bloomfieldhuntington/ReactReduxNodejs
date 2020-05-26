import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getExampleData } from '../actions/example';

const ExampleComponent = ( getExampleData ) => {
    
    return (
        <Fragment>
            Example Component
        </Fragment>
    )
}

ExampleComponent.propTypes = {
    getExampleData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    example: state.example
})

export default connect(mapStateToProps, {getExampleData})(ExampleComponent)
