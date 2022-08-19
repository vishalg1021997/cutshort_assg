//In this Component the Logo and Heading are created and its one of the topmost parent element
//CreateStepper components is render here which is further divded into small components

import React from 'react'
import CreateStepper from './CreateStepper'

const Eden = () => {
    return (
        <div style={{ width: '500px' }}>
            <div style={{ display: 'inline-flex',margin:' auto auto 70px' }}>
                <div>
                    <img src={require("./logo/eden.PNG")} alt="" />
                </div>
                <div>
                    <h2 style={{ margin: '0px 10px 0px' }}>Eden</h2>
                </div>
            </div>
            <CreateStepper />
        </div>
    )
}

export default Eden