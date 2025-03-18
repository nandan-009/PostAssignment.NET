import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    let [user, setUser] = useState({ username: '', password: '' });

    const login = (event) => {
        event.preventDefault();
        // call the API to get the token
        fetch('http://localhost:5001/api/Account/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(data => {
            localStorage.setItem('token', data.token);
            navigate('/colleges');
            console.log('token:', data.token);
            console.log('logged-in:', user);
        }).catch(err => {
            console.log('invalid credentials:', err);
        })
    }

    const textHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser((prevData) => ({ ...prevData, [name]: value }));
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <form 
                className="bg-light shadow-lg p-4 rounded-3 w-100" 
                style={{ 
                    maxWidth: '350px', 
                    marginTop: '30px',
                }} 
                onSubmit={login}
            >
                <h2 className="text-center text-primary mb-3" style={{ fontSize: '1.8rem' }}>Login</h2>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="form-control" 
                        name="username" 
                        value={user.username} 
                        onChange={textHandler} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                        name="password" 
                        value={user.password} 
                        onChange={textHandler} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
            </form>
        </div>
    )
}

export default Login;
