import React from 'react';

export const Palette = ({ colors, onChange }) => (
  <div className="Palette">
    {Object.entries(colors).map(([name, value]) => (
      <button
        key={name}
        type="button"
        className="Palette-color"
        style={{ backgroundColor: value }}
        onClick={() => onChange(name)}
      />
    ))}
  </div>
);
