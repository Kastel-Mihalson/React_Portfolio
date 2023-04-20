import './login.scss'

const Login = () => {
    return (
        <form>
            <h1>Welcome to Portfolio</h1>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
        </form>        
    )
}

export default Login