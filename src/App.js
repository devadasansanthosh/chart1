import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import JointScatterChart from './JointScatterChart';

function App() {
  return (
    <div className="App">
      <h1>Example Charts</h1>
     <BarChart/>
     <hr/>
     <h2>Joint Scatter chart</h2>
     <JointScatterChart/>
     <hr/>
     <PieChart/>
     <ScatterChart/>
    </div>
  );
}

export default App;
