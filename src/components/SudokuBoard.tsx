import React, { useState } from 'react';
import SudokuCell from './SudokuCell';
import { solveSudoku } from '../utils/sudokuSolver';

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(Array(9).fill(0).map(() => Array(9).fill(0)));
  const [initialBoard, setInitialBoard] = useState<boolean[][]>(
    Array(9).fill(false).map(() => Array(9).fill(false))
  );

  const handleCellChange = (row: number, col: number, value: number) => {
    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = value;
    setBoard(newBoard);
    
    const newInitialBoard = initialBoard.map(row => [...row]);
    newInitialBoard[row][col] = value !== 0;
    setInitialBoard(newInitialBoard);
  };

  const handleSolve = () => {
    const boardCopy = board.map(row => [...row]);
    if (solveSudoku(boardCopy)) {
      setBoard(boardCopy);
    } else {
      alert('No solution exists for this puzzle!');
    }
  };

  const handleClear = () => {
    setBoard(Array(9).fill(0).map(() => Array(9).fill(0)));
    setInitialBoard(Array(9).fill(false).map(() => Array(9).fill(false)));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-9 gap-[1px] bg-gray-300 p-[1px]">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                ${colIndex % 3 === 0 && colIndex !== 0 ? 'border-l-2 border-gray-400' : ''}
                ${rowIndex % 3 === 0 && rowIndex !== 0 ? 'border-t-2 border-gray-400' : ''}
              `}
            >
              <SudokuCell
                value={cell}
                onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                isInitial={initialBoard[rowIndex][colIndex]}
              />
            </div>
          ))
        )}
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleSolve}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Solve
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SudokuBoard;