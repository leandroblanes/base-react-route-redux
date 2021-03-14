import { useState } from 'react'
import { Form, Button } from 'react-bootstrap/'

import { useDispatch } from "react-redux"
import './Login.scss'

const Login = props => {
    const dispatch = useDispatch()
    const [dados, setDados] = useState({})

    const alterar = (campo, valor) => {
        setDados({
            ...dados,
            [campo]: valor
        })
    }

    const enviar = (ev) => {
        ev.preventDefault()

        // chamar o service para validar a senha
        // salvar token
        // alterar o store.logado para true
        // redirecionar para home

        dispatch({
            type: 'set',
            logado: true
        })
        props.history.replace('/')
    }

    return (
        <div className="login">
            <Form onSubmit={enviar}>
                <h3 className="mb-4 mt-0 text-center">Identifique-se</h3>
                <Form.Group controlId="formLogin">
                    <Form.Control type="text" value={dados.login} onChange={(el) => alterar('login', el.target.value)} placeholder="CPF ou CNPJ" />
                    <Form.Control type="password" value={dados.senha} onChange={(el) => alterar('senha', el.target.value)} placeholder="Senha" />
                </Form.Group>
                <div className="text-center">
                    <Button type="submit" color="primary" block>Entrar</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login