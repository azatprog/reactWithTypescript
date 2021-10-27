import React, { useContext, useRef } from 'react';
import { TodosContext } from '../../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todoRef = useRef<HTMLInputElement>(null);

    const todoCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todoCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text"> Todo text </label>
            <input
                ref={todoRef}
                type="text"
                id="text" />
            <button type="submit"> Add Todo </button>
        </form>
    );

};

export default NewTodo;