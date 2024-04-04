// components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../Redux/Actions/action';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggleTask = () => {
        dispatch(toggleTask(task.id));
    };

    return (
        <div>
        <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleTask}
        />
        <span className='task-actions'>{task.description}</span>
        </div>
    );
    };

export default Task;