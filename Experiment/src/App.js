import logo from './logo.svg';
import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm.js';
import GAListener from './components/GAListener';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
import MainLayout from './components/Layout/MainLayout';
import EmptyLayout from './components/Layout/EmptyLayout';
import LayoutRoute from './components/Layout/LayoutRoute';
import './App.css';
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import componentQueries from 'react-component-queries';
import { productsData } from './demos/dashboardPage';

////** firebase import  */
import { auth } from './authFirebase/firebase';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './store';
import PrivateRoute from './PrivateRoutes';
import ChangePasswordPage from './pages/ChangePasswordPage';
import LoginForm from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { SpinnerCircular } from 'spinners-react';

const AlertPage = React.lazy(() => import('./pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('./pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('./pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('./pages/ButtonPage'));
const CardPage = React.lazy(() => import('./pages/CardPage'));
const ChartPage = React.lazy(() => import('./pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./pages/DropdownPage'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const InputGroupPage = React.lazy(() => import('./pages/InputGroupPage'));
const NetflixPage = React.lazy(() => import('./pages/NetflixPage'));
const ModalPage = React.lazy(() => import('./pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage'));
const TablePage = React.lazy(() => import('./pages/TablePage'));
const NewTablePage = React.lazy(() => import('./pages/NewTablePage'));
const TypographyPage = React.lazy(() => import('./pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};
const App = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo,error} = userLogin;
  const [isLoggedIn,setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(userLogin);
    if(userLogin.userInfo) {
      history.push('/dashboard');
    }
    return () => {

    }
  }, [userLogin,history]);
  return (
    <BrowserRouter basename={getBasename()} history={history}>
      <GAListener>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => (
              <LoginForm {...props} authState={STATE_LOGIN} />
            )}
            breakpoint={props.breakpoint}
          />
          <LayoutRoute
            exact
            path="/signup"
            layout={EmptyLayout}
            component={props => (
              <RegisterPage {...props} authState={STATE_SIGNUP} />
            )}
          />
          <LayoutRoute
            exact
            path="/resetpassword"
            layout={EmptyLayout}
            component={props => (
              <ChangePasswordPage {...props} />
            )}
          />
          <MainLayout breakpoint={props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              {/* <Route exact path="/dashboard" component={DashboardPage} /> */}
              <PrivateRoute
                exact
                path="/"
                component={DashboardPage}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/dashboard"
                component={DashboardPage}
              ></PrivateRoute>
              {/* <Route exact path="/dashboard" component={DashboardPage} /> */}
              {/* <Route exact path="/" component={DashboardPage} /> */}
              {/* <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route> */}
              <Route exact path="/login-modal" component={AuthModalPage} />
              <Route exact path="/buttons" component={ButtonPage} />
              <Route exact path="/cards" component={CardPage} />
              <Route exact path="/widgets" component={WidgetPage} />
              <Route exact path="/typography" component={TypographyPage} />
              <Route exact path="/alerts" component={AlertPage} />
              <Route exact path="/tables" component={TablePage} />
              <PrivateRoute
                exact
                path="/newtables"
                component={NewTablePage}
              ></PrivateRoute>
              {/* <Route exact path="/newtables" component={NewTablePage} /> */}
              <Route exact path="/badges" component={BadgePage} />
              <Route
                exact
                path="/button-groups"
                component={ButtonGroupPage}
              />
              <Route exact path="/dropdowns" component={DropdownPage} />
              <Route exact path="/progress" component={ProgressPage} />
              <Route exact path="/modals" component={ModalPage} />
              <Route exact path="/forms" component={FormPage} />
              <Route exact path="/input-groups" component={InputGroupPage} />
              <Route exact path="/charts" component={ChartPage} />
              <PrivateRoute exact path="**" component={AuthPage}></PrivateRoute>
            </React.Suspense>
          </MainLayout>
          <Redirect to="/" />
        </Switch>
      </GAListener>
    </BrowserRouter>
  );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
