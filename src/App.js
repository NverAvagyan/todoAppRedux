import "./App.css";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="container px-5">
      <div className="container d-flex border-2 border-bottom border-warning pb-3 mb-2">
        <Form className="col-6" />
        <Filter className="col-6" />
      </div>
      <Todos />
    </div>
  );
}

export default App;
