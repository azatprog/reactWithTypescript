import NewTodo from './components/new-todo/NewTodo';
import Todos from './components/todos/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;
