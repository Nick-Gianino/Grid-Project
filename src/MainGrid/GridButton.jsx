import React from 'react';

const GridButton = ({ buttonProps }) => {
  return (
    <button 
      className="h-[20vh] w-[20vw] bg-orange-500 text-white text-3xl hover:bg-white hover:text-black" 
      onClick={buttonProps.onClick}
    >
      {buttonProps.text}
    </button>
  );
};

export default GridButton;