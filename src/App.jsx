import React from 'react';
import BingoBoard from './components/BingoBoard';

function App() {
  return (
    <div className="min-h-screen bg-emerald-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6">♻️ Eco Habit Bingo</h1>
      <BingoBoard />
    </div>
  );
}

export default App;
