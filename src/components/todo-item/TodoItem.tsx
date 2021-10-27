import React from 'react';
import Todo from '../../models/Todo';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo, onItemClick: () => void }> = ({ todo, onItemClick }) => {
    return <li className={classes.item} onClick={onItemClick}> {todo.text} </li>
};

export default TodoItem;