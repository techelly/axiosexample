import axios from 'axios';
//sendDetailsToServer is a function defined using arrow function
const sendDetailsToServer=(props)=>{
    //Using props we are getting form data 
    let payload= {
        "email": props.email.toString(),
        "password":props.password.toString()
        }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        }
    };
    //Using axios post method we making an HTTP post method call, and in request body sending data i.e. payload
    axios.post('http://localhost:9091/login',payload,customConfig).then(function(response){
            console.log(response.status);
            console.log(response);
    });
}

export default sendDetailsToServer;