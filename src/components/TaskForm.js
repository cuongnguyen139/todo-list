import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, edittedItem, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  //function to handle adding task or editting task
  const submitHandler = (e) => {
    e.preventDefault();
    if (!edittedItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, edittedItem.id, edittedItem.complete);
    }
  };

  //function to set value of title to state when input form is changed
  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  ////function to set value of title to editted input field
  useEffect(() => {
    if (edittedItem) {
      setTitle(edittedItem.title);
    } else {
      setTitle('');
    }
  }, [edittedItem]);

  return (
    <form onSubmit={submitHandler}>
      <div class="form-group">
        <input
          className="form-control"
          onChange={changeHandler}
          value={title}
          type="text"
          placeholder="add a task"
          required
        />
        <button className="btn btn-primary mt-3" type="submit">
          {edittedItem ? 'Finish editting' : 'Add a task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
