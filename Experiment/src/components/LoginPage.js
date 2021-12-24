import logo200Image from '../assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import { Card, Col, Row, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithGoogle } from '../actions/userActions';
import { validateEmail, validatePassword, validateLoginFields,isEmpty } from '../services/validate';
import { Spinner, Start, Stop } from './spinner';
const LoginForm = (props) => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error } = userLogin;
    const [data, setData] = useState({email: '',password: ''});
    const [validate, setValidate] = useState({});
    const [errors, setErrors] = useState('');
    const [isSpin, setSpinner] = useState(false);
    useEffect(() => {
        console.log(userLogin);
        if (userInfo) {
            setErrors('');
            setSpinner(false);

            props.history.push('/dashboard');
        } else if (error) {
            setSpinner(false);
            setErrors(error.message);
        }
        return () => {
            setSpinner(false);
            // userInfo = null;
        }
    }, [userLogin]);
    const submit = async (event) => {
        event.preventDefault();
        const { message, status } = validateLoginFields(validate['email'], validate['password']);
        const checkInputs = isEmpty(data['email'], data['password']);
        if (status === 'failed') {
            setErrors(message);
        } else if (checkInputs) {
            setErrors('All fields are required.');
        } else {
            await dispatch(login(data));
            setErrors('');
        }
    }
    const loginWGoogle = async () => {
        dispatch(loginWithGoogle(props));
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const checkboxvalue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData({ ...data, [name]: value });
    };
    const emailValidation = (e) => {
        setValidate({ email: validateEmail(e) });
    }
    const passwordValidation = (e) => {
        setValidate({ password: validatePassword(e) });
    }

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
    } = props;
    return (
        <Row
            style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {isSpin && <Spinner />}

            <Col md={6} lg={4}>
                <Card body>
                    {errors && <Alert color="danger">
                        {errors}
                    </Alert>}
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
                                valid={validate.email === 'has-success'}
                                invalid={validate.email === 'has-danger'}
                                onChange={(e) => {
                                    emailValidation(e);
                                    handleChange(e);
                                }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for={passwordLabel}>{passwordLabel}</Label>
                            <Input {...passwordInputProps} name='password'
                                valid={validate.password === 'has-success'}
                                invalid={validate.password === 'has-danger'}
                                onChange={(e) => {
                                    passwordValidation(e);
                                    handleChange(e);
                                }} />
                            <FormText>Password must contains atleast one uppercase,lowercase & special character letters</FormText>
                        </FormGroup>

                        <hr />
                        <Button
                            size="lg"
                            className="bg-gradient-theme-left border-0"
                            block type="submit"
                            onClick={submit}
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
                            onClick={loginWGoogle}
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
