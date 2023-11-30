import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [displayedUnit, setDisplayedUnit] = useState('years'); // Default to 'years'
  const [result, setResult] = useState(0);
  const [boxSize, setBoxSize] = useState("2rem"); // Default box size for years

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleUnitButtonClick = (unit) => {
    setDisplayedUnit(unit);
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;

    if (unit === 'years') {
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setResult(ageInYears.toFixed(2));
      setBoxSize('2rem');
    } else if (unit === 'months') {
      const ageInMonths = ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
      setResult(ageInMonths.toFixed(2));
      setBoxSize('0.3rem');
    } else if (unit === 'weeks') {
      const ageInWeeks = ageInMilliseconds / (1000 * 60 * 60 * 24 * 7);
      setResult(ageInWeeks.toFixed(2));
      setBoxSize('0.2rem');
    } else if (unit === 'days') {
      const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
      setResult(ageInDays.toFixed(2));
      setBoxSize('2px');
    }
  };

  const generateAgeBoxes = (count, size) => {
    const boxCounts = {
      years: 60,
      months: 720,
      weeks: 2880,
      days: 20160,
    };

    const boxes = [];

    for (let i = 0; i < boxCounts[displayedUnit]; i++) {
      boxes.push(
        <div
          key={i}
          className={i < count ? 'filled-box' : 'empty-box'}
          style={{ width: size, height: size }}
        ></div>
      );
    }

    return (
      <div className="style2">
        {boxes}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Age Counter</h1>
      <input
        type="date"
        value={birthdate}
        onChange={handleBirthdateChange}
      />
      <div className='style'>
        <button onClick={() => handleUnitButtonClick('years')}>Years</button>
        <button onClick={() => handleUnitButtonClick('months')}>Months</button>
        <button onClick={() => handleUnitButtonClick('weeks')}>Weeks</button>
        <button onClick={() => handleUnitButtonClick('days')}>Days</button>
      </div>
      <div className="result">
        {`Your age in ${displayedUnit}: ${result}`}
      </div>
      <div className='style2'>
        <span>{displayedUnit.charAt(0).toUpperCase() + displayedUnit.slice(1)}: {Math.floor(result)}</span>
        {generateAgeBoxes(Math.floor(result), boxSize)}
      </div>
    </div>
  );
}

export default AgeCalculator;
