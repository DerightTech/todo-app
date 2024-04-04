//import modules from react and redux
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Tasks';

const TaskList = ({ filter }) => {
    const tasks = useSelector(state => state.tasks);

    //filtering the tast
    const filteredTasks =
        filter === 'done'
        ? tasks.filter(task => task.isDone)
        : filter === 'notDone'
        ? tasks.filter(task => !task.isDone)
        : tasks;

    return (
        <div className='task-item'>
        {filteredTasks.map(task => (
            <Task key={task.id} task={task} />
        ))}
        </div>
    );
};

export default TaskList;