import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Email from '../../common/Email';
import Password from '../../common/Password';
import FormButton from '../../common/FormButton';
import PasswordRepeat from './PasswordRepeat';
import Checkbox from './Checkbox';
import useUser from '../../../contexts/UserContext';

const Registration = () => {
  const [state, setState] = useState({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
    passwordRepeat: { value: '', isValid: false },
    termsAccepted: false
  });

  const [user, dispatch] = useUser();

  const { email, password, passwordRepeat, termsAccepted } = state;

  const onTextChanged = name => ({ target }) => {
    const { validity, value } = target;
    const isValid = validity.patternMismatch || validity.typeMismatch;
    setState({ ...state, [name]: { value, isValid } });
  };

  const onBlur = name => () => {
    if (state[name].wasBlurred) return;
    setState({ ...state, [name]: { ...state[name], wasBlurred: true } });
  };

  const setTermsAccepted = () => {
    setState({ ...state, termsAccepted: !termsAccepted });
  };

  const onSubmit = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    if (e.target.checkValidity()) {
      dispatch({
        type: 'REGISTER',
        payload: { email: state.email.value, password: state.password.value }
      });
    }
  };

  return (
    <>
      {user.isUserLoggedIn && <Redirect to='notes' />}

      <Row className='justify-content-center'>
        <Col xs={11} lg={8} className='my-4'>
          <h1 className='display-4 text-center'>Register an account</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={onSubmit} className='needs-validation' noValidate>
            <Email onTextChanged={onTextChanged('email')} onBlur={onBlur('email')} state={email} />
            <Password
              onTextChanged={onTextChanged('password')}
              onBlur={onBlur('password')}
              state={password}
            />
            <PasswordRepeat
              pattern={password.value}
              onTextChanged={onTextChanged('passwordRepeat')}
              onBlur={onBlur('passwordRepeat')}
              state={passwordRepeat}
            />
            <Checkbox onClick={setTermsAccepted} />
            <FormButton disabled={!termsAccepted} icon={'user-plus'} title={'Create new account'} />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
