import React from 'react';

const BingoSquare = ({ text, isMarked, onClick }) => {
  const baseClasses = "cursor-pointer select-none text-sm font-semibold flex items-center justify-center text-center rounded-md h-24 p-2 border border-green-400 transition-all duration-300";
  const markedClasses = "bg-green-500 text-white scale-105 shadow-md";
  const unmarkedClasses = "bg-white hover:bg-green-100";

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${isMarked ? markedClasses : unmarkedClasses}`}
    >
      {text}
    </div>
  );
};

export default BingoSquare;
