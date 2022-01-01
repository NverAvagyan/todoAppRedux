import { connect } from "react-redux";
import Todo from "./Todo/Todo";

const Todos = ({ todos }) => {
    return (
      <div>
          {todos.map(item => <Todo todo={item} key={item.id}/>)}
      </div>
    );
  };
  
  export default connect((state) => ({todos: state.todos}), null)(Todos);
  