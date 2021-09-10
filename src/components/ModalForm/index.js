import { Modal, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import * as modalAction from '../../actions/modal';
import styles from './styles';

class ModalForm extends Component {
  render() {
    const { open, classes, modalActionCreators, title, component, location } =
      this.props;
    const { pathname } = location;
    const { hideModal } = modalActionCreators;

    return (
      <Modal open={pathname === '/login' ? false : open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.closeIcon} onClick={hideModal} />
          </div>

          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  open: propTypes.bool,
  title: propTypes.string,
  classes: propTypes.object,
  modalActionCreators: propTypes.shape({
    hideModal: propTypes.func,
  }),
  component: propTypes.object,
  location: propTypes.object,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withStyles(styles), withConnect)(ModalForm);
