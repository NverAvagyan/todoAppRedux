import './App.css';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className='container px-5'>
      <Form />
      <Todos />
    </div>
  );
}

export default App;
