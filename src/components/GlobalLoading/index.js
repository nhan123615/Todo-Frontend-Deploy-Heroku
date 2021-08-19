import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './styles';
import loadingIcon from '../../assets/loading.gif';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="Loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: propTypes.object,
  showLoading: propTypes.bool,
};

const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
