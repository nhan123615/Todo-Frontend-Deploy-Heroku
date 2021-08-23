import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as uiAction from '../../actions/ui';
import Header from '../DashBoard/Header';
import SideBar from '../DashBoard/SideBar';
import styles from './styles';

class DashBoard extends Component {
  handleToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    // eslint-disable-next-line no-unused-expressions
    value ? showSidebar() : hideSidebar();
  };

  render() {
    const { children, classes, name, showSidebar } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <SideBar
            showSidebar={showSidebar}
            onToggleSidebar={this.handleToggleSidebar}
          />

          <div
            className={cn(classes.wrapperContent, {
              [classes.shifLeft]: showSidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

DashBoard.propTypes = {
  children: propTypes.object,
  classes: propTypes.object,
  name: propTypes.string,
  showSidebar: propTypes.bool,
  uiActionCreators: propTypes.shape({
    showSidebar: propTypes.func,
    hideSidebar: propTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  showSidebar: state.ui.showSidebar,
});

const mapDispatchToProps = (dispatch) => ({
  uiActionCreators: bindActionCreators(uiAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DashBoard);
