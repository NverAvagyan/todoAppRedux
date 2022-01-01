import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todos/todosReducer";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (value.trim()) {
      const newTodo = {
        title: value.trimStart(),
        id: Date.now(),
        completed: false,
      };

      addTodo(newTodo);
      setValue("");
    }
  };

  return (
    <div className="mb-3 pb-3 border-1 border-bottom border-primary">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Todo title
      </label>
      <input
        value={value}
        onChange={handleInput}
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="title here"
      />
      <button className="btn btn-primary mt-2" onClick={handleButtonClick}>
        Add todo
      </button>
    </div>
  );
};

export default connect(null, {
  addTodo,
})(Form);
