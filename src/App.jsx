// import './App.css';
// import Brand from './components/Brand';

// function App() {
//   return (
//     <div className="app-container">
//       <Brand  />
//     </div>
//   )
// }

// export default App;


import React from 'react';
import './App.css';
import Brand from './components/Brand'; 
import Square from './components/square';
import Hero from './components/hero';

function App() {
  return (
    <div className="app-container">
      {/* <Brand brand="Visa" /> */}

      {/* <Square /> */}

      <Hero alignment="right" />
    </div>

  );
}

export default App;
