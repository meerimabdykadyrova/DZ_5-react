import React from 'react';
import ReactDOM from 'react-dom/client';
import './Form.css';
import TaskApp from "./todo/todo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TaskApp />
    </React.StrictMode>
);

