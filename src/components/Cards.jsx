// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';



// eslint-disable-next-line react/prop-types
const Card = ({ text1, text2, bgImage }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-between h-90 text-white text-left p-6 bg-cover bg-center w-64"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-2xl font-bold">{text1}</h1>
      <p className="text-lg">{text2}</p>
    </div>
  );
};

export default Card;


