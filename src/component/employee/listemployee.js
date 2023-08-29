import React from 'react';
function ListEmployeeComponent(){
    return(
        <>
            <p>List Employee Component</p>
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={()=>console.log("Inside List Component")}> Add Employee</button>
                 </div>
                 <br></br>
            </div>
        </>
    );
}

export default ListEmployeeComponent;