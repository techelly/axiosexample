import React,{useState,useEffect} from 'react';
import EmployeeService from '../../services/employeeservice';
import axios from 'axios';
function ViewEmployeeComponent(){
    console.log("Inside View Employee Component");
    const [employee,setEmployee]= useState({
        firstName:"",
        lastName:"",
        emailId:""
    });
    
    useEffect(()=>{
        console.log("Inside useEffect");
        //setEmployee(EmployeeService.getEmployeeById(1),[]);
        
       axios.get("http://localhost:9091/api/v1/employees" + '/' + 1)
        .then(function(response){
            console.log(response.data);
            //setData(response.data);     
    }).catch(function(error){
        console.log(error);
    },[]);
       
    });
    return (
        <div>
        <br></br>
        <div className = "card col-md-6 offset-md-3">
            <h3 className = "text-center"> View Employee Details</h3>
            <div className = "card-body">
                <div className = "row">
                    <label> Employee First Name: </label>
                    <div> { employee.firstName }</div>
                </div>
                <div className = "row">
                    <label> Employee Last Name: </label>
                    <div> { employee.lastName }</div>
                </div>
                <div className = "row">
                    <label> Employee Email ID: </label>
                    <div> { employee.emailId }</div>
                </div>
            </div>

        </div>
    </div>

    );
}

export default ViewEmployeeComponent;