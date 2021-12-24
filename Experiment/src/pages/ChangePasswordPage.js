import logo200Image from '../assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, FormFeedback, FormText } from 'reactstrap';
import { Card, Col, Row, Alert } from 'reactstrap';
import { isUserExists, resetPassword } from '../actions/userActions';
import { isEmptyFields, validateFields } from '../services/validate';

import { validateEmail, validatePassword, validateConfirmPassword } from '../services/validate';
const ChangePasswordPage = (props) => {
    const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });
    const [validate, setValidate] = useState({});
    const [errors, setErrors] = useState(null);
    const [isEmailVerified, settoEmailVerify] = useState(false);
    const [savedata, setdetails] = useState({});
    useEffect(() => {

    }, []);

    const verifyUser = (event) => {
        console.log(data);
        isUserExists(data.email)
            .then(res => {
                setdetails(res.data());
                setErrors({ message: 'Email is verified successfully!', status: 'success', color: 'primary' })
                settoEmailVerify(true);
            }).catch(error => {
                console.log(error);
                setData({});
                setErrors({ message: 'Email is not verified. Please try after sometime.', status: 'failed', color: 'danger' })
                event.persist();
                settoEmailVerify(false);
            });
    }
    const handleReset = async (event) => {
        event.preventDefault();
        const { message, status } = validateFields(validate['email'], validate['password'], validate['confirmPassword']);
        const checkInputs = isEmptyFields(data['email'], data['password'], data['confirmPassword']);

        if (status === 'failed') {
            setErrors({ message: message, status: 'failed', color: 'danger' })
        } else if (checkInputs) {
            setErrors({ message: 'All fields are required.', status: 'failed', color: 'danger' })
        } else {
            resetPassword(data, savedata).then(res => {
                console.log(res);
                setErrors({ message: 'Password has been updated successfully!', status: 'success', color: 'primary' })
            }).catch(error => {
                console.log(error);
                setErrors({ message: 'Something went wrong. Please try after sometime.', status: 'failed', color: 'danger' })
            })
            setErrors('');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
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
                    {errors && <Alert color={errors.color}>
                        {errors.message}
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
                        {!isEmailVerified && <FormGroup>
                            <Label for={emailLabel}>{emailLabel}</Label>
                            <Input {...emailInputProps} name='email'
                                valid={validate.email === 'has-success'}
                                invalid={validate.email === 'has-danger'}
                                onChange={(e) => {
                                    emailValidation(e);
                                    handleChange(e);
                                }} />
                            <FormText>Please input an Email to verify user.</FormText>
                        </FormGroup>
                        }
                        {isEmailVerified && <FormGroup>
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
                        }{isEmailVerified &&
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
                        }
                        <hr />
                        {isEmailVerified && <Button
                            size="lg"
                            className="bg-gradient-theme-left border-0"
                            block type="submit"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                        } {!isEmailVerified &&
                            <Button
                                size="lg"
                                className="bg-gradient-theme-left border-0"
                                block type="button"
                                onClick={verifyUser}
                            >
                                Verify Email
                            </Button>
                        }
                        {children}
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

ChangePasswordPage.propTypes = {
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

ChangePasswordPage.defaultProps = {
    authState: 'Change_Password',
    showLogo: true,
    emailLabel: 'Email',
    emailInputProps: {
        type: 'email',
        placeholder: 'your@email.com',
    },
    passwordLabel: 'New password',
    passwordInputProps: {
        type: 'password',
        placeholder: 'Enter new password',
    },
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordInputProps: {
        type: 'text',
        placeholder: 'confirm your password',
    },
    onLogoClick: () => { },
};

export default ChangePasswordPage;

