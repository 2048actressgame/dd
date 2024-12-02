import React from 'react';

interface SudokuCellProps {
  value: number;
  onChange: (value: number) => void;
  isInitial: boolean;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange, isInitial }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : parseInt(e.target.value.slice(-1));
    if ((newValue >= 0 && newValue <= 9) || e.target.value === '') {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      className={`w-12 h-12 text-center border ${
        isInitial ? 'bg-gray-100 font-bold' : 'bg-white'
      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      maxLength={1}
    />
  );
};

export default SudokuCell;