import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  changeTodo,
  deleteTodo,
  toggleTodo,
} from "../../../redux/todos/todosReducer";

const Todo = ({ todo, toggleTodo, deleteTodo, changeTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleInputChange = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleSave = () => {
    if (title === todo.title) {
      return setEditMode(false);
    }

    if (title.trim()) {
      changeTodo(todo.id, title);
    }
    setEditMode(false);
  };

  useEffect(() => {
    setTitle(todo.title);
  }, [editMode, todo.title]);

  return (
    <div className="border border-primary rounded m-2 p-1 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-between">
        <input
          className="form-check-input ms-1"
          type="checkbox"
          id={todo.id}
          onChange={handleInputChange}
          checked={todo.completed}
        />
        {editMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control ms-1 border-primary border-2"
            autoFocus
            spellCheck="false"
          />
        ) : (
          <label className="form-check-label ps-3" htmlFor={todo.id}>
            {todo.title}
          </label>
        )}
      </div>
      <div>
        {editMode ? (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
        )}
        <button className="btn btn-danger ms-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default connect(null, {
  deleteTodo,
  toggleTodo,
  changeTodo,
})(Todo);
