import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import AdminLayoutRoute from '../../components/Layout/AdminLayoutRoute';
import DefaultLayoutRoute from '../../components/Layout/DefaultLayoutRoute';
import ModalForm from '../../components/ModalForm';
import { ROUTES, USER_ROUTES } from '../../consts/routes';
import configStore from '../../redux/configStore';
import { history } from '../../redux/history';
import theme from './../../commons/theme';
import styles from './../../containers/App/styles';

const store = configStore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = USER_ROUTES.map((route) => {
      const { path, name, component, exact } = route;
      return (
        <AdminLayoutRoute
          key={route.path}
          path={path}
          name={name}
          component={component}
          exact={exact}
        />
      );
    });

    return xhtml;
  };

  renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => {
      const { path, name, component, exact } = route;
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={path}
          name={name}
          component={component}
          exact={exact}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <ModalForm />
            <ConnectedRouter history={history}>
              <Switch>
                {this.renderAdminRoutes()}
                {this.renderDefaultRoutes()}
              </Switch>
            </ConnectedRouter>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
