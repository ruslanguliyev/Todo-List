
import './App.css';
import AddToDo from './components/AddToDo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className="app">
        <h1 className="app-title">My Tasks</h1>
        <AddToDo/>
        <TodoList />
      </div>
    </>
  );
}

export default App;
