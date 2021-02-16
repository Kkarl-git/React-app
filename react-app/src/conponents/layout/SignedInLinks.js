import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create' className="btn-floating btn-small green darken-2 transparent pulse">
                <i className="material-icons white-text">create</i>
            </NavLink></li>
            <li><a onClick={props.signOut} className=" btn-floating btn-small transparent">
                <i className="material-icons">exit_to_app</i>
            </a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)