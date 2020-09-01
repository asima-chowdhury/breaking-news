import React from 'react';
import { Fragment } from 'react'

const Fragments = () => {
    return (
        // 1st way :  <></>
        // 2nd way :  <React.Fragment>...code...</React.Fragment> 
        // 3rd way :   import {Fragment} from 'react-bootstrap' & <Fragment>...</Fragment>
        <div>
            <>
                <h4>Know Sports News</h4>
                <button>Click here</button>
            </>
            <React.Fragment>
                <h4>Know Business News</h4>
                <button>Click here</button>
            </React.Fragment>
            <Fragment>
                <h4>Entertain News</h4>
                <button>Click here</button>
            </Fragment>
        </div>
    );
};

export default Fragments;