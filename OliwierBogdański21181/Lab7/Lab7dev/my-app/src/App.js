
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
const todos = ['Wstać', 'Wypić kawę', 'Zjeść', 'Zrobić drzemkę', 'Zjeść',  'Pójść spać'];

  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Anna" />
        <Hello name="Bartek" />
        <Hello name="Oliwier" />
        <Counter />
        <InputTracker />
        <LoginStatus isLoggedIn={true} />
        <h3>Lista Zadań </h3>
        <TodoList todos={todos} />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
