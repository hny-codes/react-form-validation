import './Form.css';
import { useState } from 'react';
import {
  ConfirmPasswordElement,
  EmailElement,
  NumberElement,
  PasswordElement,
  TextElement,
} from './FormElements';

const Form = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success!`);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>{title}</h1>
      <div className='form-group'>
        <TextElement
          text={'Name'}
          name={'name'}
          value={name}
          handleValue={setName}
          id={'name'}
          required={true}
        />
        <EmailElement
          text={'Email'}
          name={'email'}
          value={email}
          handleValue={setEmail}
          id={'email'}
          required={true}
        />
      </div>
      <div className='form-group'>
        <TextElement
          text={'Country'}
          name={'country'}
          value={country}
          handleValue={setCountry}
          id={'country'}
          required={true}
        />
        <NumberElement
          text={'Zip Code'}
          name={'zip'}
          value={zipCode}
          handleValue={setZipCode}
          id={'zip'}
          required={true}
        />
      </div>
      <div className='form-group'>
        <PasswordElement
          text={'Password'}
          name={'password'}
          value={password}
          handleValue={setPassword}
          id={'password'}
          required={true}
        />
        <ConfirmPasswordElement
          text={'Confirm Password'}
          name={'confirmPassword'}
          value={confirmPassword}
          password={password}
          handleValue={setConfirmPassword}
          id={'confirmPassword'}
        />
      </div>
      <div className='btn-submit'>
        <input type='submit' value="Let's Plan!" />
      </div>
    </form>
  );
};

export default Form;
