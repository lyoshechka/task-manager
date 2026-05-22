import React from 'react';

function TaskStats({ total, completed, onClearCompleted }) {
    return (
        <div className="stats-container">
            <div className="stats-info">
                <span>Всего задач: <strong>{total}</strong></span>
                <span>Выполнено: <strong>{completed} из {total}</strong></span>
            </div>

            {completed > 0 && (
                <button className="clear-button" onClick={onClearCompleted}>
                    Очистить выполненные
                </button>
            )}
        </div>
    );
}

export default TaskStats;