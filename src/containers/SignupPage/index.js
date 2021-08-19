import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
    };
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({
      showConfirmPassword: !showConfirmPassword,
    });
  };

  render() {
    const { classes } = this.props;
    const { showPassword, showConfirmPassword } = this.state;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent className={classes.cardContent}>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h3">Register</Typography>
                </div>
                <TextField
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  name="email"
                />
                <FormControl
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowConfirmPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControlLabel
                  control={<Checkbox value-="agree" />}
                  label="Already read the lines"
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className={classes.margin}
                >
                  Signup
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>Already Have Account ?</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
Signup.propTypes = {
  classes: propTypes.object,
};
export default withStyles(styles)(Signup);
