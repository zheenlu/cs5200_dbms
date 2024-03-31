import React, {useState} from "react";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label for="email">email</label>
                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       type="email"
                       placeholder="youremail@gmail.com"
                       id="email"
                       name="email"/>
                <label htmlFor="password">password</label>
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       type="password"
                       placeholder="*********"
                       id="password"
                       name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}

export default Login;