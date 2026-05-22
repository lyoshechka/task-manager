import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskStats from './TaskStats';
import { useTasks } from './useTasks';
import './App.css';

function App() {

    const { tasks, totalTasks, completedTasks, addTask,
        toggleTaskStatus, clearCompletedTasks } = useTasks();


    return (
        <div className="app-container">
            <h1>Менеджер задач</h1>
            <TaskForm onAddTask={addTask} />

            <div className="tasks-section">
                <h2>Список задач</h2>
                {tasks.length === 0 ? (
                    <p id="no-tasks_message">Активных задач пока нет. Добавьте первую!</p>
                ) : (
                    <ul className="tasks-list">
                        {tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggleStatus={toggleTaskStatus}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <TaskStats
                total={totalTasks}
                completed={completedTasks}
                onClearCompleted={clearCompletedTasks}
            />
        </div>
    );
}

export default App;