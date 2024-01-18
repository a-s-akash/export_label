import React from 'react';

const FormComponent = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const frameStyle = {
    position: 'relative',
    height: '300px', // Adjust the height of the frame as needed
    width: '500px', // Adjust the width of the frame as needed
    border: '1px solid black',
  };

  const inputStyles = {
    position: 'absolute',
    boxSizing: 'border-box',
    padding: '8px',
    fontFamily: 'Copperplate, sans-serif',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'white',
  };

  const inputCoordinates = {
    'parcel_type': { x: '10%', y: '1%', width: '45%', height: '15%' },
    'parcel_items': { x: '47%', y: '1%', width: '52%', height: '15%' },
    'from_location': { x: '1%', y: '59%', width: '35%', height: '40%' },
    'to_location': { x: '39%', y: '27%', width: '60%', height: '72%' },
    'logo_path': { x: '1%', y: '18%', width: '28%', height: '30%' },
    'fromm': { x: '1%', y: '49%', width: '14%', height: '10%' },
    'too': { x: '37%', y: '18%', width: '10%', height: '9%' },
  };

  return (
    <div style={containerStyle}>
      <div style={frameStyle}>
        {Object.keys(inputCoordinates).map((inputName) => {
          const { x, y, width, height } = inputCoordinates[inputName];
          const style = {
            ...inputStyles,
            left: x,
            top: y,
            width: width,
            height: height,
          };

          return (
            <input
              key={inputName}
              type="text"
              placeholder={inputName.replace('_', ' ')}
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormComponent;
