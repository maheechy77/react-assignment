import React,{ useState } from 'react';
import fakeData from '../../fakedata';
import User from '../User/User';
import Salary from '../Salary/Salary';
import './Users.css';

const Users = () => {
    const first15=fakeData.slice(0,15);
    const [users,setUsers]=useState(first15);
    const [user,addUser]=useState([]);

    const handleAddSalary=(salary)=>{
        console.log(salary);
        const oldUser = [...user]
        const found = oldUser.find(element => element === salary);
        if(!found){
            const newUser=[...user,salary];
            addUser(newUser);
        }else{
            alert("Already added!")
        }
        
    }
    return (
        <div className="users-container">
            <div  className="user-container">
                {
                    users.map(user=><User handleAddSalary={handleAddSalary} user={user} />)
                }
            </div>
            <div className="salary-container">
                <h3>Salary</h3>
                <Salary user={user}/>
            </div>
        </div>
    )
}

export default Users
