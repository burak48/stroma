/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react' // eslint-disable-line
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            navigate('/home')
        }
    }

    return (
        <div css={customStyles}>
            <section className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}

const customStyles = css`
    .login-form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        width: 300px;
    }
    .login-form input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .login-form button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #3f51b5;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
    .login-form button:hover {
        background-color: #1a237e;
    }
`

export default Login
