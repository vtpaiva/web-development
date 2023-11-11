import React from 'react';
import './styles/Box.css'

function Box(props) {
    return (
        <div className='defaultBox'>
            <fieldset style={{'display' : props.display ? props.display : 'flex'}}>
                {props.name ? <legend>{props.name}</legend> : null}
                {props.children}
            </fieldset>
        </div>
    )
}

function SubBox(props) {
    return (
        <div className='defaultSubBox'>
            {props.children}
        </div>
    )
}

export {Box, SubBox}