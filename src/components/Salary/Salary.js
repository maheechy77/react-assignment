import React from 'react';

const Salary = (props) => {
    const user= props.user;
    const totalSalary= user.reduce((total,prd)=> Number(total)+Number(prd.salary),0)
    return (
        <div>
            <h3>Total Salary</h3>
            <h4>Salary Given to : {props.user.length} Emplooyes</h4>
            <h4>Total Salary Amount Given: {totalSalary}</h4>
        </div>
    )
}

export default Salary;
