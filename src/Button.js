import React from 'react';
import './Button.css';

export default function Button({ children, onClick, color, className = '' }) {
  const classNames = `Button ${color} ${className}`;

  return (
    <button className={classNames} onClick={onClick}>{children}</button>
  )
}
