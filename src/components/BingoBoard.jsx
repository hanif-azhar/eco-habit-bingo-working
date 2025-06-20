import React, { useState } from 'react';
import BingoSquare from './BingoSquare';
import ConfettiBlast from './ConfettiBlast';

const HABITS = [
  "Bring own bag", "Eat local food", "Use reusable bottle", "No meat", "Recycled properly",
  "Took shorter shower", "Used public transport", "Line-dried clothes", "Composted scraps", "Refused plastic straw",
  "Turned off unused electronics", "Work remotely", "Walked or biked", "Bought second-hand", "Used tote bag",
  "Avoided single-use", "Eco product used", "Reusable container", "Planted something", "Donated item",
  "Borrowed instead of bought", "Carpooled", "Digital note-taking", "Reused jars", "Shared resources"
];

const checkBingo = (marked) => {
  const lines = [];

  // Rows
  for (let r = 0; r < 5; r++) {
    lines.push([0,1,2,3,4].map(i => r * 5 + i));
  }

  // Columns
  for (let c = 0; c < 5; c++) {
    lines.push([0,1,2,3,4].map(i => c + i * 5));
  }

  // Diagonals
  lines.push([0,6,12,18,24]);
  lines.push([4,8,12,16,20]);

  return lines.some(line => line.every(idx => marked[idx]));
};

const BingoBoard = () => {
  const [marked, setMarked] = useState(Array(25).fill(false));
  const [bingo, setBingo] = useState(false);

  const toggleSquare = (index) => {
    const updated = [...marked];
    updated[index] = !updated[index];
    setMarked(updated);
    setBingo(checkBingo(updated));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {bingo && <ConfettiBlast />}
      <div className="grid grid-cols-5 gap-2">
        {HABITS.map((habit, idx) => (
          <BingoSquare
            key={idx}
            text={habit}
            isMarked={marked[idx]}
            onClick={() => toggleSquare(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default BingoBoard;
