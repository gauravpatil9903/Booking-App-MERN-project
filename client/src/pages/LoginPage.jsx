import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import { toast } from 'react-toastify';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);


    async function handleloginSubmit(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            // alert('Login successful');
            setRedirect(true);
            toast.success("Login Successfully");
        } catch (e) {
            // alert('login failed');
            toast.error("Login Failed");
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto " onSubmit={handleloginSubmit}>

                    <span className="text-md font-medium text-slate-700">Email</span>
                    <input type="email" placeholder="your@email.com"
                        value={email} onChange={ev => setEmail(ev.target.value)}
                    />
                    <span className="text-md font-medium text-slate-700">Password</span>
                    <input type="password" placeholder="enter your password"
                        value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary bg-sky-500 hover:bg-sky-700">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>

        </div>
    );
}