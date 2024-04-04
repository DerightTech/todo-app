import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Actions/action';

//initializes a state variable taskDescription using the useState hook
const AddTask = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const dispatch = useDispatch(); //initializes the dispatch function using the useDispatch hook from react-redux

    //initializing the addtask button to trigger when click
    const handleAddTask = () => {
        if (taskDescription.trim() !== '') {
        const newTask = {
            id: Date.now(),
            description: taskDescription,
            isDone: false,
        };
        dispatch(addTask(newTask));
        setTaskDescription('');
        }
    };

    return (
        <div>
        <input
            className='add-task-input'
            type="text"
            value={taskDescription}
            onChange={event => setTaskDescription(event.target.value)}
        />
        <button className='add-task-button' onClick={handleAddTask}>Add Task</button>
        </div>
    );
    };

export default AddTask;