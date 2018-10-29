import React from 'react';

export const Row = ({ label, children }) => (
  <div className="Row">
    <strong className="Row-label">{label}</strong>
    <div className="Row-content">{children}</div>
  </div>
);
