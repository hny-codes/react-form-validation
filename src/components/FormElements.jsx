import { useRef } from 'react';
import './FormElements.css';

function TextElement({ text, name, value, id, handleValue, required = false }) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    console.log(inputRef.current.validity.typeMismatch);
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
    <div>
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
    console.log(inputRef.current.validity.typeMismatch);
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
    <div>
      <label htmlFor={name}>{text}: </label>
      <input
        type='email'
        value={value}
        onChange={handleValidity}
        name={name}
        id={id}
        required={required && true}
        ref={inputRef}
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
  required = false,
}) {
  const inputRef = useRef(null);

  function handleValidity(e) {
    console.log(inputRef.current.validity.typeMismatch);
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
    <div>
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
    console.log(inputRef.current.validity.typeMismatch);
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
    <div>
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

export { TextElement, EmailElement, NumberElement, PasswordElement };
