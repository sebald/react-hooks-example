import React from 'react';

export const Input = ({ value, onChange }) => (
  <input
    className="Input"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
