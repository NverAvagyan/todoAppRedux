import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  changeDateRange,
  changeShowTodos,
  changeTitle,
} from "../../redux/todos/filterReducer";

const Filter = ({ changeDateRange, changeShowTodos, changeTitle }) => {
  const [rangeValue, setRangeValue] = useState(7);
  const dateRangeRef = useRef(null);
  const completedFilterRef = useRef(null);
  const titleFilterRef = useRef(null);

  const handleFilter = () => {
    changeDateRange(dateRangeRef.current.value);
    changeShowTodos(completedFilterRef.current.value);
    changeTitle(titleFilterRef.current.value);
  };
  
  const handleShowAll = () => {
    changeDateRange("30");
    changeShowTodos("all");
    changeTitle('');
  };

  return (
    <div
      className="col-6 offset-1 mt-3"
      style={{
        boxSizing: "border-box",
      }}
    >
      <div className="text-center mb-2">Filter todos</div>
      <div>
        <input
          type="text"
          ref={titleFilterRef}
          className="form-control mb-3"
          placeholder="By title"
        />
      </div>
      <div>
        By deadline:{" "}
        {+rangeValue === 0
          ? "today"
          : +rangeValue === 1
          ? "tomorrow"
          : "after " + +rangeValue + " days"}
        <input
          type="range"
          className="form-range mb-2"
          id="customRange1"
          min={0}
          max={30}
          defaultValue={7}
          ref={dateRangeRef}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select ref={completedFilterRef} className="form-select">
          <option value="all">Both completed and uncomplete</option>
          <option value="completed">Completed</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-warning" onClick={handleFilter}>
          Filter todos
        </button>
        <button className="btn btn-success" onClick={handleShowAll}>
          Show all todos
        </button>
      </div>
    </div>
  );
};

export default connect(null, { changeDateRange, changeShowTodos, changeTitle })(
  Filter
);
