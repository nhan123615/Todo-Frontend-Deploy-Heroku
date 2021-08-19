import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './../../commons/theme';
import styles from './../../containers/App/styles';
import configStore from '../../redux/configStore';
import GlobalLoading from '../../components/GlobalLoading';
import ModalForm from '../../components/ModalForm';
import { ADMIN_ROUTES, ROUTES } from '../../consts';
import AdminLayoutRoute from '../../components/Layout/AdminLayoutRoute';
import DefaultLayoutRoute from '../../components/Layout/DefaultLayoutRoute';

const store = configStore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
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
            <Switch>
              {this.renderAdminRoutes()}
              {this.renderDefaultRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
