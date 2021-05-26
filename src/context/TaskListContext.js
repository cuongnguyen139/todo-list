import React, { createContext, useState } from 'react';
import data from '../data.json';
import { v4 as uuid } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState(data);
  const [edittedItem, setEdittedItem] = useState(null);

  //add a task
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  //remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //find a task
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEdittedItem(item);
  };

  //edit a task
  const editTask = (title, id, complete) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id, complete } : task
    );
    setTasks(newTasks);
    setEdittedItem(null);
  };

  //mark a task as done as undone
  const toggleHandler = (id) => {
    const newTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTasks(newTasks);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        edittedItem,
        addTask,
        removeTask,
        findItem,
        editTask,
        toggleHandler,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
