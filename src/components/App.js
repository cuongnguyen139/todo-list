import React from 'react';
import '../App.scss';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container text-center">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
