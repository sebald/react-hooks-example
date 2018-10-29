import React from 'react';

export const Card = ({ theme, children }) => {
  return <div className={`Card Card--${theme}`}>{children}</div>;
};
