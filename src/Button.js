import React from 'react';
import './Button.css';

export default function Button({ color, children, onClick }) {
  const className = `Button ${color}`;

  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
