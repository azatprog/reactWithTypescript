import React, { useRef } from 'react';

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void, }> = (props) => {
    const todoRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);

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