import { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todos/todosReducer";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const dateRef = useRef(null);
  const date = new Date();

  const handleButtonClick = () => {
    if (value.trim() && dateRef.current.value) {
      const newTodo = {
        title: value.trimStart(),
        id: Date.now(),
        completed: false,
        deadline: new Date(dateRef.current.value).getTime(),
      };

      addTodo(newTodo);
      setValue("");
    }
  };

  return (
    <div
      className="mt-3 col-5 d-flex flex-column justify-content-between align-items-stretch"
      style={{
        boxSizing: "border-box",
      }}
    >
      <div>
        <div className="text-center mb-2">Create todo</div>
        <input
          value={value}
          onChange={handleInput}
          className="form-control mb-3"
          placeholder="Title here"
        />
        <div className="mb-3">
          <span>Deadline:</span>
          <input
            type="date"
            min={date.toISOString().slice(0, 10)}
            max={new Date(date.getTime() + 30 * 86400000)
              .toISOString()
              .slice(0, 10)}
            ref={dateRef}
            className="ms-2"
            defaultValue={new Date(date.getTime() + 7 * 86400000)
              .toISOString()
              .slice(0, 10)}
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-2" onClick={handleButtonClick}>
          Add todo
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  addTodo,
})(Form);
