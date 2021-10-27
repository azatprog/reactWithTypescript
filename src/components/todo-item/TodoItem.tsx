import React, { useContext } from 'react';
import Todo from '../../models/Todo';
import { TodosContext } from '../../store/todos-context';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    const todoCtx = useContext(TodosContext);

    return <li className={classes.item} onClick={todoCtx.removeTodo.bind(null, todo.id)}> {todo.text} </li>
};

export default TodoItem;