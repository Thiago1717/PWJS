import React from 'react';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <h1>React Lab 8 – Ćwiczenie 1</h1>
      <ToggleDetails />
      <ScoreDisplay score={80}/>
      <TaskList />
      <UserList />
      <TimerCounter /> 
    </div>
  );
}

export default App;
