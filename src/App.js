import './App.css';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import ExternalDrawer from './drawer/ExternalDrawer';
import InternalDrawer from './drawer/InternalDrawer';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import TermsAndConditions from './components/TermsAndConditions';
import Products from './components/internalUser1/Products';
import Users from './components/internalUser1/Users';
import Marketing from './components/internalUser2/Marketing';
import Sales from './components/internalUser2/Sales';
import ExternalProducts from './components/externalUser/ExternalProducts';
import ExternalUsers from './components/externalUser/ExternalUsers';
import ExternalAccount from './components/externalUser/ExternalAccount';
import ExternalProfile from './components/externalUser/ExternalProfile';
import User1Profile from './components/internalUser1/User1Profile';
import User1Account from './components/internalUser1/User1Account';
import User2Profile from './components/internalUser2/User2Profile';
import User2Account from './components/internalUser2/User2Account';
import PrivateRoute from './privateRouting/PrivateRoute';
import NotAuthorized from './components/NotAuthorized';

function App() {
  const location = useLocation();
  const token = localStorage.getItem('type');

  return (
    <div className="App" style={{ display: "flex", marginTop: 80, paddingRight: "10px" }} >

      {location.pathname == "/login" ? (
        ""
      ) : location.pathname == "/terms" ? (
        ""
      ) : location.pathname == '/' ? (
        ""
      ) : (
        token == "internal1" ? <InternalDrawer /> : token == "internal2" ? <InternalDrawer /> : token == 'external' ? <ExternalDrawer /> : ""
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/terms"> <TermsAndConditions /> </PrivateRoute>

        {/* internal user 1 routes start */}

        <PrivateRoute exact path="/products" >
          {token == "internal1" ? <Products /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/users" >
          {token == "internal1" ? <Users /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/user-1-profile" >
          {token == "internal1" ? <User1Profile /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/user-1-account" >
          {token == "internal1" ? <User1Account /> : <NotAuthorized />}
        </PrivateRoute>

        {/* internal user 1 routes end */}


        {/* internal user 2 routes start */}

        <PrivateRoute exact path="/marketing">
          {token == "internal2" ? <Marketing /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/sales" >
          {token == "internal2" ? <Sales /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/user-2-profile">
          {token == "internal2" ? <User2Profile /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/user-2-account" >
          {token == "internal2" ? <User2Account /> : <NotAuthorized />}
        </PrivateRoute>

        {/* internal user 2 routes end */}


        {/* external user routes start */}

        <PrivateRoute exact path="/external-products" >
          {token == "external" ? <ExternalProducts /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/external-users" >
          {token == "external" ? <ExternalUsers /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/external-account" >
          {token == "external" ? <ExternalAccount /> : <NotAuthorized />}
        </PrivateRoute>

        <PrivateRoute exact path="/external-profile" >
          {token == "external" ? <ExternalProfile /> : <NotAuthorized />}
        </PrivateRoute>

        {/* external user routes end */}

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
