import axios from 'axios';
function  EmployeeService(){
    const EMPLOYEE_API_BASE_URL = "http://localhost:9091/api/v1/employees";
    function getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL)
                .then(function(response){
                console.log(response.data);
                //setData(response.data);     
        }).catch(function(error){
            console.log(error);
        });
    }

    function createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    function getEmployeeById(employeeId){
        console.log("Inside getEmployeeById----");
        axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId)
        .then(function(response){
            console.log(response.data);
            //setData(response.data);     
    }).catch(function(error){
        console.log(error);
    });
        
        
    }

    function updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    function deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default EmployeeService;