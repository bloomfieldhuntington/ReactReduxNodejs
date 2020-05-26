import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './landing.css';
// Actions
import { getExampleData } from '../../actions/example';

const Landing = ({getExampleData, example: {clothes}}) => {
    useEffect(() => {
        getExampleData();
    }, [getExampleData])

    if (clothes) {
        console.log(clothes[0])
    }

    // List objects from state
    function ListClothesItems() {
        var listArray = [];
        if (clothes) {
            for (let i = 0; i < clothes.length; i++) {
                const item = clothes[i];
                listArray.push(item)
                
            }
        }
        const content = listArray.map((object, index) =>
            <div key={index}>{Object.values(object)}</div>
        );
        
        return (
            <div className="selection-landing-item">{content}</div>
        )

    }

    return (
        <Fragment>
            
            <div className="container-landing">
                <h1 className="title-landing">RE:US</h1>
                <p className="text-landing">This is the landing page of RE:US</p>

                <div className="selection-landing">
                    {(clothes) ? <ListClothesItems test={clothes}/> : <Fragment></Fragment>}
                </div>

            </div>

        </Fragment>
    );
};

Landing.propTypes = {
      getExampleData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    example: state.example

})

export default connect(mapStateToProps, {getExampleData})(Landing);