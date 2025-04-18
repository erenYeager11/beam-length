"use client"
import React, { useState } from 'react';

const BeamLengthPredictor = () => {
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [totalEnds, setTotalEnds] = useState('');
  const [flange, setFlange] = useState('');
  const [result, setResult] = useState('');

  const calculateBeamLength = () => {
    const c = parseFloat(count);
    const w = parseFloat(width);
    const te = parseFloat(totalEnds);
    const f = parseFloat(flange);

    if (isNaN(c) || isNaN(w) || isNaN(te) || isNaN(f)) {
      setResult('Please enter valid inputs.');
      return;
    }

    const beamLength = -16138 + 198 * c + 29.1 * w - 0.7139 * te + 142.9 * f;
    const lowerBound = beamLength - 250;
    const upperBound = beamLength + 250;

    setResult(
      `<b>Beam Length:</b> ${beamLength.toFixed(2)}<br />
       <b>Range:</b> ${lowerBound.toFixed(2)} - ${upperBound.toFixed(2)}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[rgb(6 6 6)] text-gray-200">
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Altmash Husain</p>
        <p className="text-xs">Version 1.01</p>
      </div>

      <div className="w-full max-w-md bg-black rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          Size Beam Length Predictor By Weaving QA
        </h2>

        <div className="mb-4">
          <label className="block mb-1">Count:</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Enter count"
            className="w-full px-4 py-2 text-white rounded-md border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Width: <span className="bg-white text-black text-xs px-2 py-0.5 rounded ml-1">(in cm)</span>
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
            className="w-full px-4 py-2 text-white rounded-md border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Total Ends:</label>
          <input
            type="number"
            value={totalEnds}
            onChange={(e) => setTotalEnds(e.target.value)}
            placeholder="Enter total ends"
            className="w-full px-4 py-2 text-white rounded-md border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Flange Used: <span className="bg-white text-black text-xs px-2 py-0.5 rounded ml-1">(in cm)</span>
          </label>
          <input
            type="number"
            value={flange}
            onChange={(e) => setFlange(e.target.value)}
            placeholder="Enter flange used"
            className="w-full px-4 py-2 text-white rounded-md border border-gray-300"
          />
        </div>

        <button
          onClick={calculateBeamLength}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Calculate Beam Length
        </button>

        <div
          className="mt-4 text-center text-lg font-medium"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>
    </div>
  );
};

export default BeamLengthPredictor;
