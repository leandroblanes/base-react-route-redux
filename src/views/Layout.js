import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

import './Layout.scss'

import routes from './routes'

const loading = (
    <div>
      Carregando
    </div>
)

const Layout = props => {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <React.Suspense fallback={loading}>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <span className="navbar-brand">Área do Cliente</span>
                        {/* <a className="navbar-brand" href="#">Área do Cliente</a> */}
                        <button className="navbar-toggler" type="button" onClick={() => setMenuAberto(!menuAberto)} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse" + (menuAberto ? ' show': '')} id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item"><Link className="nav-link" to="/notas">Notas</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/materiaisDidaticos">Materiais Didáticos</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/notasFiscais">Notas Fiscais</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/boletos">Boletos</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Container>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            )
                        })}
                        <Redirect from="/" to="/notas" />
                    </Switch>
                </Container>
            </main>
        </React.Suspense>
    )
}

export default Layout