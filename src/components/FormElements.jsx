function TextElement({ text, name, value, id, handleValue, required = false }) {
  return (
    <div>
      <label htmlFor={name}>{text}: </label>
      <input
        type='text'
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        name={name}
        id={id}
        required={required && true}
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
  return (
    <div>
      <label htmlFor={name}>{text}: </label>
      <input
        type='email'
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        name={name}
        id={id}
        required={required && true}
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
  return (
    <div>
      <label htmlFor={name}>{text}: </label>
      <input
        type='number'
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        name={name}
        id={id}
        required={required && true}
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
  return (
    <div>
      <label htmlFor={name}>{text}: </label>
      <input
        type='password'
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        name={name}
        id={id}
        required={required && true}
      />
    </div>
  );
}

export { TextElement, EmailElement, NumberElement, PasswordElement };
