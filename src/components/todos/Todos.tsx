import React, { useContext } from 'react';
import Todo from '../../models/Todo';
import { TodosContext } from '../../store/todos-context';
import TodoItem from '../todo-item/TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {
                todoCtx.items.map((item: Todo) => <TodoItem key={item.id} todo={item} />)}
        </ul>
    );
};

export default Todos;