import React ,{useState} from 'react';
import sendcustomersdatatoserver from '../services/sendcustomersdatatoserver';

function Customers() {
    
    const [customers,setCustomers] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        active:""
    });
    
    const {firstName,lastName,email,phone,active}=customers;//destructuring

    //Setting the state of the component
    const changeHandler = e=>{
        setCustomers(
            {
                ...customers,[e.target.name]: [e.target.value]
            }
        );
    }
    //Form submit handler method
    const submitHandler = e=>{
        e.preventDefault();
        sendcustomersdatatoserver(customers);//sending form data to server
        console.log(customers);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label><br />
                <input type="text" name="firstName" value={firstName} onChange={changeHandler}/> <br />
                <label>Last Name</label><br />
                <input type="text" name="lastName" value={lastName} onChange={changeHandler}/> <br />
                <label>Email</label><br />
                <input type="text" name="email" value={email} onChange={changeHandler}/> <br />
                <label>Phone</label><br />
                <input type="text" name="phone" value={phone} onChange={changeHandler}/> <br />
                <label>Active</label><br />
                <input type="text" name="active" value={active} onChange={changeHandler}/> <br />
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
}
 
export default Customers;