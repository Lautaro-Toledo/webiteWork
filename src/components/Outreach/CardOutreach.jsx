import React from 'react';

function CardOutreach({ title, subtitle, text }) {
  return (
    <div className="p-5 bg-gray-300 rounded-2xl">
      <h2 className="p-2 text-3xl font-bold text-gray-800">{title}</h2>
      <h3 className="text-xl font-bold">{subtitle}:</h3>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default CardOutreach;
