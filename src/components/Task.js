import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {
  console.log(task);
  const { removeTask, findItem, toggleHandler } = useContext(TaskListContext);
  return (
    <li className="list-group-item border-0">
      <span
        className={task.complete ? 'strike' : ''}
        onClick={() => toggleHandler(task.id)}
      >
        {task.title}
      </span>
      <div>
        <button
          className="btn btn-danger mr-3"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn btn-info" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
