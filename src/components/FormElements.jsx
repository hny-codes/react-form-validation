import { useRef, useEffect } from 'react';
import './FormElements.css';

function TextElement({ text, name, value, id, handleValue, placeholder, required = false }) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    if (
      inputRef.current.validity.valueMissing ||
      inputRef.current.validity.tooShort
    ) {
      inputRef.current.setCustomValidity('Invalid username!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    } else {
      inputRef.current.setCustomValidity('');
      inputRef.current.classList.add('valid');
      inputRef.current.classList.remove('invalid');
    }
    handleValue(e.target.value);
  }

  return (
    <div className='form-element'>
      <label htmlFor={name}>{text}: </label>
      <input
        type='text'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={required && true}
        minLength={4}
        ref={inputRef}
        placeholder={placeholder}
      />
    </div>
  );
}

function EmailElement({
  text,
  name,
  value,
  id,
  handleValue,
  required = false,
}) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    if (
      inputRef.current.validity.typeMismatch ||
      inputRef.current.validity.valueMissing ||
      inputRef.current.value === ''
    ) {
      inputRef.current.setCustomValidity('Invalid email!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    } else {
      inputRef.current.setCustomValidity('');
      inputRef.current.classList.add('valid');
      inputRef.current.classList.remove('invalid');
    }
    handleValue(e.target.value);
  }

  return (
    <div className='form-element'>
      <label htmlFor={name}>{text}: </label>
      <input
        type='email'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={required && true}
        ref={inputRef}
        placeholder='email@mail.com'
      />
    </div>
  );
}

function NumberElement({
  text,
  name,
  value,
  handleValue,
  id,
  placeholder,
  required = false,
}) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    if (
      inputRef.current.validity.typeMismatch ||
      inputRef.current.validity.rangeOverflow ||
      inputRef.current.validity.rangeUnderflow ||
      inputRef.current.value === ''
    ) {
      inputRef.current.setCustomValidity('Invalid number!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    } else {
      inputRef.current.setCustomValidity('');
      inputRef.current.classList.add('valid');
      inputRef.current.classList.remove('invalid');
    }
    handleValue(e.target.value);
  }

  return (
    <div className='form-element'>
      <label htmlFor={name}>{text}: </label>
      <input
        type='number'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={required && true}
        min={10000}
        max={99999}
        ref={inputRef}
        placeholder={placeholder}
      />
    </div>
  );
}

function PasswordElement({
  text,
  name,
  value,
  handleValue,
  id,
  required = false,
}) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    if (
      inputRef.current.validity.valueMissing ||
      inputRef.current.validity.tooShort
    ) {
      inputRef.current.setCustomValidity('Password too short!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    } else {
      inputRef.current.setCustomValidity('');
      inputRef.current.classList.add('valid');
      inputRef.current.classList.remove('invalid');
    }
    handleValue(e.target.value);
  }

  return (
    <div className='form-element'>
      <label htmlFor={name}>{text}: </label>
      <input
        type='password'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={required && true}
        ref={inputRef}
        minLength={5}
      />
    </div>
  );
}

function ConfirmPasswordElement({
  text,
  name,
  value,
  password,
  handleValue,
  id,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (value !== password) {
      inputRef.current.setCustomValidity('Invalid matching passwords!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    }
  }, [password, value]);

  function handleValidity(e) {
    if (inputRef.current.validity.valueMissing || e.target.value != password) {
      inputRef.current.setCustomValidity('Invalid matching passwords!!');
      inputRef.current.classList.add('invalid');
      inputRef.current.classList.remove('valid');
    } else {
      inputRef.current.setCustomValidity('');
      inputRef.current.classList.add('valid');
      inputRef.current.classList.remove('invalid');
    }
    handleValue(e.target.value);
  }

  return (
    <div className='form-element'>
      <label htmlFor={name}>{text}: </label>
      <input
        type='password'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={true}
        ref={inputRef}
        minLength={5}
      />
    </div>
  );
}

export {
  TextElement,
  EmailElement,
  NumberElement,
  PasswordElement,
  ConfirmPasswordElement,
};
