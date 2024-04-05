// components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, toggleEdit } from '../Redux/Actions/action';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggleTask = () => {
        dispatch(toggleTask(task.id));
    };

    const handleToggleEdit = () => {
        dispatch(toggleEdit(task));
    };

    return (
        <div>
        <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleTask}
        />
        <span className='task-actions'>{task.description}</span>
        <button onClick={handleToggleEdit}>Edit</button>
        </div>
    );
    };

export default Task;