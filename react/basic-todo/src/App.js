import logo from './logo.svg';
import InputBox from './components/inputBox'
import React, { useState } from 'react';
import List from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  const handleDelete = (index) => {
    let newTasks = tasks.filter((task, i) => {
      return i !== index;
    });
    setTasks(newTasks);
  }
  return (
    <>
      <h1>Basic ToDo App </h1>
      <InputBox addTask={addTask} />
      <List taskArr={tasks} handleDelete = {handleDelete}  />
    </>
  );
}

export default App;
