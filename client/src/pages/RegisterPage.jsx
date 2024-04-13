import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { UserContext } from "../UserContext";
import { toast } from 'react-toastify';


export default function RegisterPage(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [redirect, setRedirect] = useState(false);

  async  function registerUser(ev){
        ev.preventDefault();

        try {
            await axios.post('/register',{
                name,
                email,
                password,
            });
            // setRedirect(true);
            // alert('Registration successful! and you can login now.');
            toast.success("Registration successful!");
        } catch (e) {
            // alert('Registration failed please try again later.');
            toast.error("Registration failed! Now you can login");
            
        }
      
    }
    // if (redirect) {
    //     return <Navigate to={'/login'} />
    // }

    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto " onSubmit={registerUser}>
                <span className="text-md font-medium text-slate-700">Name</span>
                <input type="text" placeholder="Enter your name"
                value={name} 
                onChange={ev =>
                 setName(ev.target.value)} />
                 <span className="text-md font-medium text-slate-700">Email</span>
                <input type="email" placeholder="your@email.com"
                value={email}
                onChange={ev=> setEmail(ev.target.value)}
                />
                <span className="text-md font-medium text-slate-700">Password</span>
                <input type="password" placeholder="Enter new password" 
                value={password} 
                onChange={ev=> setPassword(ev.target.value)}/>
                <button className="primary bg-sky-500 hover:bg-sky-700">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already have an account! <Link className="underline text" to={'/login'}>Login</Link>
                </div>
            </form>
            </div>
           
        </div>
    );
}