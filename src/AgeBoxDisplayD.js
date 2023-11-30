// import React, { useState } from 'react';
// function AgeCalculator() {
//   const [birthDate, setBirthDate] = useState('');
//   const [age, setAge] = useState({ years: 0, months: 0, weeks: 0, days: 0 });
//   const calculateAge = () => {
//     const birthDateObj = new Date(birthDate);
//     const currentDate = new Date();
//     const ageInMilliseconds = currentDate - birthDateObj;
//     const ageInSeconds = ageInMilliseconds / 1000;
//     const ageInMinutes = ageInSeconds / 60;
//     const ageInHours = ageInMinutes / 60;
//     const ageInDays = ageInHours / 24;
//     const ageInWeeks = ageInDays / 7;
//     const ageInMonths = ageInWeeks / 4.34812; // An average of 4.34812 weeks in a month
//     const ageInYears = ageInMonths / 12;
//     setAge({
//       years: Math.floor(ageInYears),
//       months: Math.floor(ageInMonths),
//       weeks: Math.floor(ageInWeeks),
//       days: Math.floor(ageInDays),
//     });
//   };

//   return (
//     <div>
//       <input
//         type="date"
//         value={birthDate}
//         onChange={(e) => setBirthDate(e.target.value)}
//       />
//       <button onClick={calculateAge}>Calculate Age</button>
// <div>
//       <div className='set_button'>
//         <span> <button >Years  </button >   </span>
//         <span><button>Months  </button>    </span>
//          <span><button>Weeks  </button>    </span>
//           <span><button>Days  </button>    </span>
//         </div>
//         <hr />
//         <div >
//             <span>Years: {age.years}</span>
//           {Array(60).fill().map((_, i) => (
//             <div
//               key={i}
//               className={i < age.years ? 'filled-box' : 'empty-box'}
//             ></div>
//           ))}
//         </div>
// <div>
//             <span>Months: {age.months}</span>
//           {Array(720).fill().map((_, i) => (
//             <div
//               key={i}
//               className={i < age.months ? 'filled-box' : 'empty-box'}
//             ></div>
//           ))}
//         </div>
//       <div>
//           <span>Weeks: {age.weeks}</span>
//           {Array(2880).fill().map((_, i) => (
//             <div
//               key={i}
//               className={i < age.weeks ? 'filled-box' : 'empty-box'}
//             ></div>
//           ))}
//         </div>

//         <div>
//           <span>Days: {age.days}</span>
//           {Array(20160).fill().map((_, i) => (
//             <div
//               key={i}
//               className={i < age.days ? 'filled-box' : 'empty-box'}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AgeCalculator;






// Another Code

// import React, { useState } from 'react';
// import './App.css';

// function AgeCalculator() {
//   const [birthdate, setBirthdate] = useState('');
//   const [displayedUnit, setDisplayedUnit] = useState('years'); // Default to 'years'
//   const [result, setResult] = useState(0);

//   const handleBirthdateChange = (e) => {
//     setBirthdate(e.target.value);
//   };

//   const handleUnitButtonClick = (unit) => {
//     setDisplayedUnit(unit);
//     const today = new Date();
//     const birthDate = new Date(birthdate);
//     const ageInMilliseconds = today - birthDate;

//     if (unit === 'years') {
//       const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//       setResult(ageInYears.toFixed(2));
//       displayAgeBoxes(Math.min(Math.floor(ageInYears), 60));
//     } else if (unit === 'months') {
//       const ageInMonths = ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
//       setResult(ageInMonths.toFixed(2));
//       displayAgeBoxes(Math.min(Math.floor(ageInMonths / 12), 60));
//     } else if (unit === 'weeks') {
//       const ageInWeeks = ageInMilliseconds / (1000 * 60 * 60 * 24 * 7);
//       setResult(ageInWeeks.toFixed(2));
//       displayAgeBoxes(Math.min(Math.floor(ageInWeeks / 52.1775), 60));
//     } else if (unit === 'days') {
//       const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
//       setResult(ageInDays.toFixed(2));
//       displayAgeBoxes(Math.min(Math.floor(ageInDays / 365.25), 60));
//     }
//   };

//   const displayAgeBoxes = (filledBoxes) => {
//     const boxes = document.querySelectorAll('.age-box');
//     for (let i = 0; i < boxes.length; i++) {
//       if (i < filledBoxes) {
//         boxes[i].classList.add('filled-box');
//       } else {
//         boxes[i].classList.remove('filled-box');
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Age Counter</h1>
//       <input
//         type="date"
//         placeholder="Enter your birthdate"
//         value={birthdate}
//         onChange={handleBirthdateChange}
//       />
//       <div>
//         <button onClick={() => handleUnitButtonClick('years')}>Years</button>
//         <button onClick={() => handleUnitButtonClick('months')}>Months</button>
//         <button onClick={() => handleUnitButtonClick('weeks')}>Weeks</button>
//         <button onClick={() => handleUnitButtonClick('days')}>Days</button>
//       </div>
//       <div className="result">
//         {`Your age in ${displayedUnit}: ${result}`}
//       </div>
//       <div>
//         <span>{displayedUnit.charAt(0).toUpperCase() + displayedUnit.slice(1)}: {Math.floor(result)}</span>
 

//         {Array(222).fill().map((_, i) => (
//           <div
//             key={i}
//             className={i < Math.floor(result) ? 'filled-box' : 'empty-box'}
//           ></div>
//         ))}

//       </div>
//     </div>
//   );


// }

// export default AgeCalculator;



 // const generateAgeBoxes = (count) => {
  //   return Array(count).fill().map((_, i) => (
  //     <div
  //       key={i}
  //       className={i < Math.floor(result) ? 'filled-box' : 'empty-box'}
  //     ></div>
  //   ));
  // };





  //   const generateAgeBoxes = (count) => {
  //   const boxCounts = {
       
  //     years: 60,
  //     months: 720,
  //     weeks: 2880,
  //     days: 20160,
  //   };
  //  const boxesToFill = Math.min(count, boxCounts[displayedUnit]);
    
  //   return Array(boxCounts[displayedUnit]).fill().map((_, i) => (
  //     <div id='demo'
  //       key={i}
  //       className={i < boxesToFill ? 'filled-box' : 'empty-box'}
  //     ></div>
      
  //   ));
    
  // };









//   import React, { useState } from 'react';
// import './App.css';

// function AgeCalculator() {
//   const [birthdate, setBirthdate] = useState('');
//   const [displayedUnit, setDisplayedUnit] = useState('years'); // Default to 'years'
//   const [result, setResult] = useState(0);
//   const [boxSize, setBoxSize] = useState('30px'); // Default box size for years

//   const handleBirthdateChange = (e) => {
//     setBirthdate(e.target.value);
//   };

//   const handleUnitButtonClick = (unit) => {
//     setDisplayedUnit(unit);
//     const boxSizes = {
//       years: '15px', // Fixed box size for years
//       months: '10px', // Fixed box size for months
//       weeks: '5px', // Dynamic box size for weeks
//       days: '3px', // Dynamic box size for days
//     };
//     setBoxSize(boxSizes[unit]);

//     const today = new Date();
//     const birthDate = new Date(birthdate);
//     const ageInMilliseconds = today - birthDate;

//     if (unit === 'years') {
//       const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//       setResult(ageInYears.toFixed(2));
//     } else if (unit === 'months') {
//       const ageInMonths = ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
//       setResult(ageInMonths.toFixed(2));
//     } else if (unit === 'weeks') {
//       const ageInWeeks = ageInMilliseconds / (1000 * 60 * 60 * 24 * 7);
//       setResult(ageInWeeks.toFixed(2));
//     } else if (unit === 'days') {
//       const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
//       setResult(ageInDays.toFixed(2));
//     }
//   };

//   const generateAgeBoxes = (count) => {
//     const boxes = [];

//     for (let i = 0; i < count; i++) {
//       boxes.push(
//         <div
//           key={i}
//           className="filled-box"
//           style={{ width: boxSize, height: boxSize }}
//         ></div>
//       );
//     }

//     return (
//       <div className="style2">
//         {boxes}
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Age Counter</h1>
//       <input
//         type="date"
//         value={birthdate}
//         onChange={handleBirthdateChange}
//       />
//       <div className='style'>
//         <button onClick={() => handleUnitButtonClick('years')}>Years</button>
//         <button onClick={() => handleUnitButtonClick('months')}>Months</button>
//         <button onClick={() => handleUnitButtonClick('weeks')}>Weeks</button>
//         <button onClick={() => handleUnitButtonClick('days')}>Days</button>
//       </div>
//       <div className="result">
//         {`Your age in ${displayedUnit}: ${result}`}
//       </div>
//       <div className='style2'>
//         <span>{displayedUnit.charAt(0).toUpperCase() + displayedUnit.slice(1)}: {Math.floor(result)}</span>
//         {generateAgeBoxes(Math.floor(result))}
//       </div>
//     </div>
//   );
// }

// export default AgeCalculator;






// import React, { useState } from 'react';
// import './App.css';

// function AgeCalculator() {
//   const [birthdate, setBirthdate] = useState('');
//   const [displayedUnit, setDisplayedUnit] = useState('years'); // Default to 'years'
//   const [result, setResult] = useState(0);

//   const handleBirthdateChange = (e) => {
//     setBirthdate(e.target.value);
//   };

//   const handleUnitButtonClick = (unit) => {
//     setDisplayedUnit(unit);
//     const today = new Date();
//     const birthDate = new Date(birthdate);
//     const ageInMilliseconds = today - birthDate;

//     if (unit === 'years') {
//       const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//       setResult(ageInYears.toFixed(2));
//     } else if (unit === 'months') {
//       const ageInMonths = ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
//       setResult(ageInMonths.toFixed(2));
//     } else if (unit === 'weeks') {
//       const ageInWeeks = ageInMilliseconds / (1000 * 60 * 60 * 24 * 7);
//       setResult(ageInWeeks.toFixed(2));
//     } else if (unit === 'days') {
//       const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
//       setResult(ageInDays.toFixed(2));
//     }
//   };

//   // Function to generate age boxes with fixed width and height
//   const generateAgeBoxes = (count, boxSize) => {
//     const boxes = [];

//     for (let i = 0; i < count; i++) {
//       boxes.push(
//         <div
//           key={i}
//           className="filled-box"
//           style={{ width: boxSize, height: boxSize }}
//         ></div>
//       );
//     }

//     for (let i = count; i < boxCounts[displayedUnit]; i++) {
//       boxes.push(
//         <div
//           key={i}
//           className="empty-box"
//           style={{ width: boxSize, height: boxSize }}
//         ></div>
//       );
//     }

//     return (
//       <div className="style2">
//         {boxes}
//       </div>
//     );
//   };

//   const boxCounts = {
//     years: 60,
//     months: 720,
//     weeks: 2880,
//     days: 20160,
//   };

//   return (
//     <div className="App">
//       <h1>Age Counter</h1>
//       <input
//         type="date"
//         value={birthdate}
//         onChange={handleBirthdateChange}
//       />
//       <div className="style">
//         <button onClick={() => handleUnitButtonClick('years')}>Years</button>
//         <button onClick={() => handleUnitButtonClick('months')}>Months</button>
//         <button onClick={() => handleUnitButtonClick('weeks')}>Weeks</button>
//         <button onClick={() => handleUnitButtonClick('days')}>Days</button>
//       </div>
//       <div className="result">
//         {`Your age in ${displayedUnit}: ${result}`}
//       </div>
//       <div className="style2">
//         <span>{displayedUnit.charAt(0).toUpperCase() + displayedUnit.slice(1)}: {Math.floor(result)}</span>
//         {generateAgeBoxes(Math.floor(result), '20px')} {/* Set the desired box size here */}
//       </div>
//     </div>
//   );
// }

// export default AgeCalculator;





// import React, { useState } from 'react';
// import './App.css';

// function AgeCalculator() {
//   const [birthdate, setBirthdate] = useState('');
//   const [displayedUnit, setDisplayedUnit] = useState('years'); // Default to 'years'
//   const [result, setResult] = useState(0);

//   const handleBirthdateChange = (e) => {
//     setBirthdate(e.target.value);
//   };

//   const handleUnitButtonClick = (unit) => {
//     setDisplayedUnit(unit);
//     const today = new Date();
//     const birthDate = new Date(birthdate);
//     const ageInMilliseconds = today - birthDate;

//     if (unit === 'years') {
//       const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//       setResult(ageInYears.toFixed(2));
//     } else if (unit === 'months') {
//       const ageInMonths = ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
//       setResult(ageInMonths.toFixed(2));
//     } else if (unit === 'weeks') {
//       const ageInWeeks = ageInMilliseconds / (1000 * 60 * 60 * 24 * 7);
//       setResult(ageInWeeks.toFixed(2));
//     } else if (unit === 'days') {
//       const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
//       setResult(ageInDays.toFixed(2));
//     }
//   };

//   const generateAgeBoxes = (count) => {
//     const boxCounts = {
//       years: 60,
//       months: 720,
//       weeks: 2880,
//       days: 20160,
//     };
//     const boxSizes = {
//       years: '30px', // Fixed box size for years
//       months: '15px', // Fixed box size for months
//       weeks: '10px', // Fixed box size for weeks
//       days: '5px', // Fixed box size for days
//     };

//     const boxes = [];

//     for (let i = 0; i < boxCounts[displayedUnit]; i++) {
//       boxes.push(
//         <div
//           key={i}
//           className={i < count ? 'filled-box' : 'empty-box'}
//           style={{ width: boxSizes[displayedUnit], height: boxSizes[displayedUnit] }}
//         ></div>
//       );
//     }

//     return (
//       <div className="style2">
//         {boxes}
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Age Counter</h1>
//       <input
//         type="date"
//         value={birthdate}
//         onChange={handleBirthdateChange}
//       />
//       <div className='style'>
//         <button onClick={() => handleUnitButtonClick('years')}>Years</button>
//         <button onClick={() => handleUnitButtonClick('months')}>Months</button>
//         <button onClick={() => handleUnitButtonClick('weeks')}>Weeks</button>
//         <button onClick={() => handleUnitButtonClick('days')}>Days</button>
//       </div>
//       <div className="result">
//         {`Your age in ${displayedUnit}: ${result}`}
//       </div>
//       <div className='style2'>
//         <span>{displayedUnit.charAt(0).toUpperCase() + displayedUnit.slice(1)}: {Math.floor(result)}</span>
//         {generateAgeBoxes(Math.floor(result))}
//       </div>
//     </div>
//   );
// }

// export default AgeCalculator;