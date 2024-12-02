import React from 'react';
import SudokuBoard from './components/SudokuBoard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="max-w-2xl w-full px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Sudoku Solver</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-6 text-center">
            Enter the numbers in the grid and click "Solve" to find the solution.
          </p>
          <SudokuBoard />
        </div>
      </div>
    </div>
  );
}

export default App;