import React from 'react';

export default function UserList(props) {
  return (
    <div>
      <ul>
        {props.value.map((val) => {
          return (
            <li key={val.id}>
              {' '}
              {val.name} is {val.age} years old{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
