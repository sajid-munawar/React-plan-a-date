import React from 'react';
import './input.css';

export default function Input({type,placeholder,name, minLength = 0, required = false}) {
  return (
    <div className="float">
      <input type={type} placeholder={placeholder} name={name} className="float__input" id={name} minLength={minLength} required={required}/>
      <label
        htmlFor={name}
        className="float__lbl"
      >
        {placeholder}
      </label>
    </div>
  )
}
