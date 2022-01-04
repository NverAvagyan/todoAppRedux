import { useState } from "react";
import { connect } from "react-redux";
import CreateTodoModal from "../../helpers/EditModal/CreateTodoModal";
import { addTodo } from "../../redux/todos/todosReducer";

const Form = ({ addTodo }) => {
  const [createMode, setCreateMode] = useState(false);

  const handleButtonClick = () => {
    setCreateMode(true);
  };

  return (
    <>
      {createMode && (
        <CreateTodoModal setCreateMode={setCreateMode} addTodo={addTodo} />
      )}
      <div
        className="mt-3 col-3 offset-1 d-flex flex-column align-items-stretch"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div className="text-center mb-2">Create todo</div>
          <button className="btn btn-primary" onClick={handleButtonClick} title="Create todo item">
            Add todo
          </button>
      </div>
    </>
  );
};

export default connect(null, {
  addTodo,
})(Form);
