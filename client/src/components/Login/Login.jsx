import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.scss'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <form onSubmit={handleSubmit} className='login'>
            <h1 className='login__title'>Login</h1>
            <input type="email" name='email' placeholder="Email" required />
            <input type="password" name='password' placeholder="Password" required />
            <button>Login btn</button>
        </form>
    );
};

export default Login;