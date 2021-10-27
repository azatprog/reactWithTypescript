import { useState } from 'react';
import NewTodo from './components/new-todo/NewTodo';
import Todos from './components/todos/Todos';
import Todo from './models/Todo';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos(prevState => prevState.concat(new Todo(text)));
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App;
