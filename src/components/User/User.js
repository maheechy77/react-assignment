import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    return (
        <div className="card">
            <h2 className="title">Employee Name: {props.user.name}</h2>
            <img src={props.user.img} />
            <p>Email: {props.user.email}</p>
            <p>Phone: {props.user.phone}</p>
            <h4> Salary : {props.user.salary}</h4>
            <button className='add-to-salary' onClick={()=>props.handleAddSalary(props.user)}>
                <FontAwesomeIcon icon={faPlus} />  Add Salary
            </button>
        </div>
    )
}

export default User
