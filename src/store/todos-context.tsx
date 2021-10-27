import React, { useState } from 'react';
import Todo from '../models/Todo';

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
};

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos(prevState => prevState.concat(new Todo(text)));
    };

    const removeTodoHandler = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
};

export default TodosContextProvider;