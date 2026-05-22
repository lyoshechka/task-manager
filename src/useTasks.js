import { useState, useEffect } from 'react';

export function useTasks() {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('task-manager');
        return savedTasks ? JSON.parse(savedTasks) : [
            {
                id: 1,
                text: 'Закрыть курсовую',
                completed: false,
                createdAt: '02.05.2026'
            },
            {
                id: 2,
                text: 'Выполнить Redux',
                completed: true,
                createdAt: '22.05.2026'
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('task-manager', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleDateString('ru-RU')
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskStatus = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return {
        tasks,
        totalTasks,
        completedTasks,
        addTask,
        toggleTaskStatus,
        clearCompletedTasks
    };
}