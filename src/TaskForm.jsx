import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [textInput, setTextInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textInput.trim() === '') return;

        onAddTask(textInput);
        setTextInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                className="task-input"
                placeholder="Что нужно сделать?"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            />
            <button type="submit" className="task-button">
                Добавить
            </button>
        </form>
    );
}

export default TaskForm;