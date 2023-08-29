import React ,{useState} from 'react';
import sendAccountsDetailsToServer from '../services/sendAccountsDetailsToServer';

function Accounts() {
    
    const [accounts,setAccounts] = useState({
        accountType:"",
        accountNumber:"",
        accountBranch:"",
        accountBalance:""
 });
    
    const {accountType,accountNumber,accountBranch,accountBalance}=accounts;//destructuring

    //Setting the state of the component
    const changeHandler = e=>{
        setAccounts(
            {
                ...accounts,[e.target.name]: [e.target.value]
            }
        );
    }
    //Form submit handler method
    const submitHandler = e=>{
        e.preventDefault();
        sendAccountsDetailsToServer(accounts);//sending form data to server
        console.log(accounts);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Account Type</label><br />
                <input type="text" name="accountType" value={accountType} onChange={changeHandler}/> <br />
                <label>Account Number</label><br />
                <input type="text" name="accountNumber" value={accountNumber} onChange={changeHandler}/> <br />
                <label>Account Branch</label><br />
                <input type="text" name="accountBranch" value={accountBranch} onChange={changeHandler}/> <br />
                <label>Account Balance</label><br />
                <input type="text" name="accountBalance" value={accountBalance} onChange={changeHandler}/> <br />
                 <input type="submit" name="submit"/>
            </form>
        </div>
    );
}
 
export default Accounts;