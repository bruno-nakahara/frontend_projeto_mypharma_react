import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Teste from './pages/teste';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem('token');

  return token ? <Component {...rest} /> : <Redirect to="/login" />;
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <PrivateRoute path="/teste" component={Teste} />
    </Switch>
  );
};

export default Routes;
