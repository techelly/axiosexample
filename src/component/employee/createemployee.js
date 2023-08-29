import React,{useState} from 'react';
import EmployeeService from'../../services/employeeservice';
function CreateEmployeeComponent(){
    const [employee,setEmployee] =useState({
            firstName: '',
            lastName: '',
            emailId: ''
        });
        const {firstName,lastName,emailId}=employee;
        const changeHandler= (e) => {
            setEmployee(
                {
                    ...employee,[e.target.name]: [e.target.value]
                }
            );
        }
    
        const saveOrUpdateEmployee= e =>{
            e.preventDefault(); 
            //send employee to axios call
            const response =EmployeeService.createEmployee(employee);
            console.log(response.data);   
        }
        const getTitle =()=>{
            
        }
        const cancel=()=>{

        }
    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={employee.firstName} onChange={changeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={employee.lastName} onChange={changeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={employee.emailId} onChange={changeHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={cancel()} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
}

export default CreateEmployeeComponent;