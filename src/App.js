import React, { useState } from 'react';
import './style.css';
import AddUser from './AddUser';
import UserList from './UserList';

export default function App() {
  const [value, setValue] = useState([]);
  const onAddUser = (name, age) => {
    setValue((prevState) => {
      return [
        ...prevState,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UserList value={value} />
    </div>
  );
}
