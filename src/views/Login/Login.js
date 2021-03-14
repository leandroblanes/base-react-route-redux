import { useDispatch } from "react-redux"

const Login = props => {
    const dispatch = useDispatch()

    const logar = () => {
        dispatch({
            type: 'set',
            logado: true
        })
        props.history.replace('/')
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <button onClick={logar}>Logar</button>
        </div>
    )
}

export default Login