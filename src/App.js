import React from 'react';
import MyList from './components/MyList';
import './App.css';

const toDos = ['Walk Zooty','Complete Websites', 'Workout',"Make Beats"];

function App() {
  return (
    <div>
        <MyList theList={toDos} />
    </div>
  );
}

export default App;
