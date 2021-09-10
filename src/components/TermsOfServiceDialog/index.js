import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import propTypes from 'prop-types';
import styles from './styles';

class TermsOfServiceDialog extends Component {
  onClose = () => {
    const { onCloseDialog } = this.props;
    onCloseDialog();
  };

  render() {
    const { classes, open } = this.props;
    return (
      <Dialog open={open} scroll="paper" onClose={this.onClose} hideBackdrop>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <Typography variant="h6" color="primary" paragraph>
            Introduction
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Intellectual Property Rights
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Restrictions
          </Typography>
          <Typography paragraph>
            You are specifically restricted from all of the following:
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem}>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography className={classes.termsConditionsListitem} paragraph>
            - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Your Content
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            No warranties
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Limitation of liability
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Indemnification
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Severability
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Variation of Terms
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Assignment
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Entire Agreement
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
          <Typography variant="h6" color="primary" paragraph>
            Governing Law & Jurisdiction
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={this.onClose}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            <ArrowBackIcon className={classes.backIcon} />
            Back
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TermsOfServiceDialog.propTypes = {
  classes: propTypes.object,
  open: propTypes.bool,
  onCloseDialog: propTypes.func,
};

export default withStyles(styles)(TermsOfServiceDialog);
