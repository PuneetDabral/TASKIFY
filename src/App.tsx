import { FormEvent, useState } from 'react';
import './App.css';
import InputFiled from './components/inputFiled';
import { Todo } from './models/models';
import TodoList from './components/todoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    if (todo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo('');
  }



  return (
    <div className="App" >
      <span className='heading'>TASKIFY</span>
      <InputFiled todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div >
  );
}

export default App;
