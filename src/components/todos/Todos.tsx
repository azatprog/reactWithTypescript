import React from 'react';
import Todo from '../../models/Todo';
import TodoItem from '../todo-item/TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onItemClick: (id: string) => void }> = ({ items, onItemClick }) => {
    return (
        <ul className={classes.todos}>
            {
                items.map((item: Todo) =>
                    <TodoItem onItemClick={onItemClick.bind(null, item.id)} key={item.id} todo={item} />)}
        </ul>
    );
};

export default Todos;