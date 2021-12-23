import logo200Image from '../assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, FormFeedback, FormText } from 'reactstrap';
import { Card, Col, Row, Alert } from 'reactstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userForm: { email: '', password: '', confirmPassword: '' },
      validate: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false,
      errors: []
    };
  }
//   get isLogin() {
//     return this.props.authState === STATE_LOGIN;
//   }

//   get isSignup() {
//     return this.props.authState === STATE_SIGNUP;
//   }

//   changeAuthState = authState => event => {
//     event.preventDefault();
//     // this.props.onChangeAuthState(authState);
//   };

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({ submitted: true });
    console.log('calling')
    console.log(this.state);
    // this.props.handleSubmit(this.isLogin, this.state);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    const checkboxvalue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [name]: value });
  };


//   renderButtonText() {
//     const { buttonText } = this.props;

//     if (!buttonText && this.isLogin) {
//       return 'Login';
//     }

//     if (!buttonText && this.isSignup) {
//       return 'Signup';
//     }

//     return buttonText;
//   }
  validateEmail(e) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRegex.test(e.target.value)) {
      validate.email = 'has-success';
    } else {
      validate.email = 'has-danger';
    }
    this.setState({ validate });
  }
  validatePassword = (e) => {
    const pswdRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/;

    const { validate } = this.state;

    if (pswdRegex.test(e.target.value)) {
      validate.password = 'has-success';
    } else {
      validate.password = 'has-danger';
    }
    this.setState({ validate });
  }
  validateConfirmPassword = (e) => {
    const { validate } = this.state;

    if (this.state.password === e.target.value) {
      validate.confirmPassword = 'has-success';
    }
    else {
      validate.confirmPassword = 'has-danger';
    }
  }
  render() {
    const {
      showLogo,
      emailLabel,
      emailInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
        <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
  
        <Col md={6} lg={4}>
  
          <Card body>
            {/* {errors && <Alert color="danger">
              {errors}
            </Alert>} */}
                 <Form>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={emailLabel}>{emailLabel}</Label>
          <Input {...emailInputProps} name='email'
            valid={this.state.validate.email === 'has-success'}
            invalid={this.state.validate.email === 'has-danger'}
            onChange={(e) => {
              this.validateEmail(e);
              this.handleChange(e);
            }} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} name='password'
            valid={this.state.validate.password === 'has-success'}
            invalid={this.state.validate.password === 'has-danger'}
            onChange={(e) => {
              this.validatePassword(e);
              this.handleChange(e);
            }} />
          <FormText>Password must contains atleast one uppercase,lowercase & special character letters</FormText>
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} name='confirmPassword'
              valid={this.state.validate.confirmPassword === 'has-success'}
              invalid={this.state.validate.confirmPassword === 'has-danger'}
              onChange={(e) => { this.handleChange(e); this.validateConfirmPassword(e) }} />
          </FormGroup>
        )}
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block type="submit"
          onClick={this.handleSubmit}
          >
         Login
        </Button>
        <div className="text-center pt-1">
          <h6>or</h6>
        </div>
        <Button
            size="lg"
            className="bg-gradient-theme-left border-0 pt-1"
            block type="button"
            // onClick={loginWGoogle}
          >
            Login with Google
          </Button>
        {children}
      </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

LoginForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  emailLabel: PropTypes.string,
  emailInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

LoginForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  emailLabel: 'Email',
  emailInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'text',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
};

export default LoginForm;
