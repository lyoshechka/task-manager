import React from 'react';

function TaskItem({ task, onToggleStatus }) {
    return (
        <li className="task-item">
            <div className="task-content" onClick={() => onToggleStatus(task.id)}>
                <span className="status-icon">
                    {task.completed ? '✔' : '⭕'}
                </span>
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                    {task.text}
                </span>
            </div>
            <small className="task-date">{task.createdAt}</small>
        </li>
    );
}

export default TaskItem;