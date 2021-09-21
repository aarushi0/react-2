import React, { useState, useRef } from 'react';
import ErrorModal from './ErrorModal';

export default function AddUser(props) {
  const nameref = useRef();
  const ageref = useRef();

  const [error, setError] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameref.current.value;
    const enteredAge = ageref.current.value;

    if (enteredName.trim().length == 0 || enteredAge.trim().length == 0) {
      setError({
        title: 'invalid input',
        message: 'enter the value',
      });
      return;
    }

    if (+enteredAge.length < 1) {
      setError({
        title: 'invalid age',
        message: 'enter the correct age',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameref.current.value = '';
    ageref.current.value = '';
  };

  const onConfirm = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirm}
        />
      )}

      <form onSubmit={onFormSubmit}>
        <label> Name </label>
        <input type="text" id="name" ref={nameref} />
        <br />
        <br />
        <label> Age </label>
        <input type="number" id="age" ref={ageref} /> <br />
        <br />
        <button type="submit"> submit </button>
      </form>
    </div>
  );
}
