import React ,{useState} from 'react';
import axios from 'axios';

function LoggedIn(){
    const [data,setData] = useState({
        email:"",
        password:""
    });
    
    const {email,password}=data;//destructuring
    const changeHandler = e=>{
        setData(
            {
                ...data,[e.target.name]: [e.target.value]
            }
        );
    }
    const submitHandler = e=>{
        e.preventDefault();
        getDetailsFrom(data.email);//sending form data email to server
        console.log(data.email);
    }
    function getDetailsFrom(email){
               
        axios.get('http://localhost:9091/loginDetails',{params:{emailId:email.toString()}})
        .then(function(response){
                //console.log(response.status);
                console.log(response.data.password);
                setData(response.data);     
        }).catch(function(error){
            console.log(error);
        });
    }
    return(
        <>
        <div>

        <form onSubmit={submitHandler}>
            <label>Enter email : </label><br />
                <input type="text" name="email" value={email} onChange={changeHandler}/> <br />
                <input type="submit" name="submit"/>

        </form>
        </div>
        <div>
            <p>Email is : {email}</p>
            <p>Password is : {password}</p>
        </div>
        </>
    );
}



export default LoggedIn;