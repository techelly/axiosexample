import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './component/employee/listemployee';
import HeaderComponent from './component/employee/header';
import FooterComponent from './component/employee/footer';
import CreateEmployeeComponent from './component/employee/createemployee';
import UpdateEmployeeComponent from './component/employee/updateemployee';
import ViewEmployeeComponent from './component/employee/viewemployee';
import Login from './component/login';
import LoggedIn from './component/loggedinsuccessful';
import Customers from './component/customers';
import Accounts from './component/accounts';
function App(){
    return (
        <div>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" element = {<ListEmployeeComponent />}></Route>
                          <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>
                          <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent />}></Route>
                          <Route path = "/view-employee/:id" element = {<ViewEmployeeComponent />}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                          <Route path = "/login" element = {<Login />}></Route>
                          <Route path = "/loggedin" element = {<LoggedIn />}></Route>
                          <Route path = "/accounts" element = {<Accounts />}></Route>
                          <Route path = "/customers" element = {<Customers />}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        
    </div>
    );
}
export default App;