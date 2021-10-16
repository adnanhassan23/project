import React from 'react';
import {NavLink} from 'react-router-dom'

const Button = (props) => {
    return (
        <>
        <NavLink to={props.Link}>
            <button className="btn-grad border-0" onClick={props.function} >
                {props.value}
            </button>
        </NavLink>
        </>
    );
}

export default Button;
