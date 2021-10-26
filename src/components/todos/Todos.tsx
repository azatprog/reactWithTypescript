import React from 'react';
import Todo from '../../models/Todo';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
    return (
        <ul>
            {items.map((item: Todo) => <li key={item.id}> {item.text} </li>)}
        </ul>
    );
};

export default Todos;