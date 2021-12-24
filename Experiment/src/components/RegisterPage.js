import logo200Image from '../assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, FormFeedback, FormText } from 'reactstrap';
import { Card, Col, Row, Alert } from 'reactstrap';
import { history } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { isEmptyFields,validateFields,validateEmail,validatePassword, validateConfirmPassword} from '../services/validate';

const RegisterPage = (props) => {
    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading } = userRegister;
    const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });
    const [validate, setValidate] = useState({});
    const [errors, setErrors] = useState('');
    useEffect(() => {
        console.log(userRegister);
        if (loading === false) {
            setErrors('');
            props.history.push('/login');
        }
        if (error) {
            setErrors(error.message);
        }
        return () => {
            userRegister['loading'] = true;
        }
    }, [userRegister]);
    const handleRegister = async (event) => {
        const { message, status } = validateFields(validate['email'], validate['password'], validate['confirmPassword']);
        const checkInputs = isEmptyFields(data['email'], data['password'], data['confirmPassword']);
        event.preventDefault();
        
        if (status === 'failed') {
            setErrors(message);
        } else if (checkInputs) {
            setErrors('All fields are required.');
        } else {
            await dispatch(register(data));
            setErrors('');
        }

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
    const confirmPassword = (e) => {
        setValidate({ confirmPassword: validateConfirmPassword(data['password'], e) })
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
                        <FormGroup>
                            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
                            <Input {...confirmPasswordInputProps} name='confirmPassword'
                                valid={validate.confirmPassword === 'has-success'}
                                invalid={validate.confirmPassword === 'has-danger'}
                                onChange={(e) => {
                                    handleChange(e);
                                    confirmPassword(e)
                                }} />
                        </FormGroup>
                        <hr />
                        <Button
                            size="lg"
                            className="bg-gradient-theme-left border-0"
                            block type="submit"
                            onClick={handleRegister}
                        >
                            SignUP
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

RegisterPage.propTypes = {
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

RegisterPage.defaultProps = {
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

export default RegisterPage;

