import React from 'react';
import TasksListItem from './TasksListItem';
import { useSelector } from 'react-redux';

const TasksList = ({ tasks }) => {
    const { checked, searchText } = useSelector(state => state.filter);

    const filteredTasks = tasks?.filter(task =>
        checked.some(c => c.id === task.project.id)
    );

    const ultimateTasks = searchText !== "" ? filteredTasks.filter(task => task.taskName.toLowerCase().includes(searchText.toLowerCase())) : filteredTasks;

    return (
        <div className="lws-task-list">
            {
                ultimateTasks?.map(task => <TasksListItem task={task}></TasksListItem>)
            }
        </div>
    );
};

export default TasksList;