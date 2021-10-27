import React from 'react';
import Todo from '../../models/Todo';
import TodoItem from '../todo-item/TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
    return (
        <ul className={classes.todos}>
            {items.map((item: Todo) => <TodoItem key={item.id} text={item.text} />)}
        </ul>
    );
};

export default Todos;