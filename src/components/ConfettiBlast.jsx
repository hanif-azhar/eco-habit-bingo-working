// src/components/ConfettiBlast.jsx
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiBlast = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return null; // nothing to render
};

export default ConfettiBlast;
