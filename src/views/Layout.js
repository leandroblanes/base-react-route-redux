import React from "react"
import { Switch, Route, Redirect } from "react-router"
import { Link } from "react-router-dom"

import routes from './routes'

const loading = (
    <div>
      Carregando
    </div>
)

const Layout = props => {
    return (
        <React.Suspense fallback={loading}>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/notas">Notas</Link></li>
                        <li><Link to="/materiaisDidaticos">Materiais Didáticos</Link></li>
                        <li><Link to="/notasFiscais">Notas Fiscais</Link></li>
                        <li><Link to="/boletos">Boletos</Link></li>
                    </ul>
                </nav>
            </div>
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
        </React.Suspense>
    )
}

export default Layout