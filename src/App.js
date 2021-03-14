import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const loading = (
  <div>
    Carregando
  </div>
)

const Login = React.lazy(() => import('./views/Login/Login'));
const Layout = React.lazy(() => import('./views/Layout'));

function App() {
  const [logado, setLogado] = useState(true)

  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path='/login' name="Login" render={props => <Login {...props} />} />
          <Route path='/' name="Home" render={props => {
            return !logado ? <Redirect to={{ pathname: "/login" }} /> : <Layout {...props} />
          }} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
