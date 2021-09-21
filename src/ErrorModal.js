import React from 'react';
import './ErrorModal.css';

export default function ErrorModal(props) {
  return (
    <div className="backdrop">
      <div className="modal">
        <header> {props.title} </header>
        <p> {props.message} </p>
        <footer>
          <button onClick={props.onConfirm}> okay</button>{' '}
        </footer>
      </div>
    </div>
  );
}
