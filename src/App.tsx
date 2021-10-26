import Todos from './components/todos/Todos';

function App() {
    const todos = ['Learn React', 'Learn Typescript'];
    return (
        <div className="App">
            <Todos items={todos} />
        </div>
    );
}

export default App;
