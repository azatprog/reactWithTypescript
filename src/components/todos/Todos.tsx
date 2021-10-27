import React from 'react';
import Todo from '../../models/Todo';
import TodoItem from '../todo-item/TodoItem';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
    return (
        <ul>
            {items.map((item: Todo) => <TodoItem key={item.id} text={item.text} />)}
        </ul>
    );
};

export default Todos;