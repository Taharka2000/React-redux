
import './App.css';
import TodoList from './components/ListTask';
import AddTodoForm from './components/Addtask';

function App() {
  return (
  <>
  <div className='container mx-auto p-4 '>
    <div className='rounded bg-white w-[60%] shadow-lg p-6  mx-auto flex flex-col'>
  <AddTodoForm/>
<TodoList/>
    </div>
  </div>
  </>
  );
}

export default App;
