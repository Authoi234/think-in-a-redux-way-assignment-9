import React from 'react';
import TasksListItem from './TasksListItem';
import { useSelector } from 'react-redux';

const TasksList = ({ tasks }) => {
    const { checked } = useSelector(state => state.filter);

    const filteredTasks = tasks?.filter(task =>
        checked.some(c => c.id === task.project.id)
    );

    return (
        <div className="lws-task-list">
            {
                filteredTasks?.map(task => <TasksListItem task={task}></TasksListItem>)
            }
        </div>
    );
};

export default TasksList;