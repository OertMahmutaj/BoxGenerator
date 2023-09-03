import React, { useState } from 'react';
import './css/BoxGenerator.css';

function BoxGenerator() {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      setBoxes([...boxes, { color, size }]);
      setColor('');
      setSize('');
    }
  };

  return (
    <div className="box-generator">
      <h1>Box Generator</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="colorInput">Enter a Color:</label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={handleColorChange}
        />
        <label htmlFor="sizeInput">Enter a Size (in pixels):</label>
        <input
          type="number"
          id="sizeInput"
          value={size}
          onChange={handleSizeChange}
        />
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="color-box"
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;
