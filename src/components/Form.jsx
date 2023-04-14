import './Form.css';

const Form = ({ title }) => {
  return (
    <div className="form">
      <h1 className='title'>{title}</h1>
      <p>Name: </p>
      <p>Email: </p>
      <p>Country: </p>
      <p>Zip Code:</p>
      <p>Password:</p>
      <p>Confirm Password: </p>
    </div>
  );
};

export default Form;
