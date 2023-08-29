import axios from 'axios';
//sendDetailsToServer is a function defined using arrow function
const sendcustomersdatatoserver=(props)=>{
    //Using props we are getting form data 
    let payload= {
        "firstName":props.firstName.toString(),
        "lastName": props.lastName.toString(),
        "email": props.email.toString(),
        "phone": props.phone.toString(),
        "active":props.active.toString()
        }
    
    const customConfig = {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        }
    };
    //Using axios post method we making an HTTP post method call, and in request body sending data i.e. payload
    axios.post('http://localhost:9091/customers',payload,customConfig).then(function(response){
            console.log(response.status);
            console.log(response);
    });
}

export default sendcustomersdatatoserver;