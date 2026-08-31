const validateEmail = (e) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(e.target.value)
    if (emailRegex.test(e.target.value)) {
        return 'has-success';
    } else {
        return 'has-danger';
    }
}
const validatePassword = (e) => {
    const pswdRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/;

    if (pswdRegex.test(e.target.value)) {
        return 'has-success';
    } else {
        return 'has-danger';
    }
}
const validateConfirmPassword = (password, e) => {
    if (password === e.target.value) {
        return 'has-success';
    }
    else {
        return 'has-danger';
    }
}
const validateLoginFields = (emailStatus, passwordStatus) => {
    let message = ''; let status = '';
    if (emailStatus === 'has-danger' || passwordStatus === 'has-danger') {
        message = 'All fields are required';
        status = 'failed';
    }
    if (emailStatus === 'has-danger' && passwordStatus === 'has-danger') {
        message = 'Email & Password must be filled';
        status = 'failed';
    }
    return { message, status };
}
const isEmpty = (email, password) => {
    if (email === '' || password === '') {
        return true;
    } else return false;
}
const isEmptyFields = (email, password, confirmPassword) => {
    if (email === '' || password === '' || confirmPassword === '') {
        return true;
    } else return false;
}
const validateFields = (email, password, confirmPassword) => {
    let message = '';
    let status = '';
    if (email === 'has-danger' && password === 'has-danger' && confirmPassword === 'has-danger') {
        message = 'Fields must be filled before proceed further.';
        status = 'failed';
    }
    if (email === 'has-danger' || password === 'has-danger' || confirmPassword === 'has-danger') {
        message = 'All fields are required';
        status = 'failed';
    }
    return { message, status };
}
export {
    validateEmail, validatePassword, validateConfirmPassword, validateLoginFields,
     isEmpty, isEmptyFields, validateFields
};