import React,{useState} from 'react';
import sendDetailsToServer from '../senddetailstoserver';

function Login() {
    
    const [data,setData] = useState({
        email:"",
        password:""
    });
    
    const {email,password}=data;//destructuring

    //Setting the state of the component
    const changeHandler = e=>{
        setData(
            {
                ...data,[e.target.name]: [e.target.value]
            }
        );
    }
    //Form submit handler method
    const submitHandler = e=>{
        e.preventDefault();
        sendDetailsToServer(data);//sending form data to server
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>User Name</label><br />
                <input type="text" name="email" value={email} onChange={changeHandler}/> <br />
                <label>Password</label><br />
                <input type="password" name="password" value={password} onChange={changeHandler}/> <br />
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
}
 
export default Login;