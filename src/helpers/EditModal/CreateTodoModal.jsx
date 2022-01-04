import { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CreateTodoModal({ setCreateMode, addTodo }) {
  const [show, setShow] = useState(true);
  const dateRef = useRef(null);
  const inputRef = useRef(null);
  const date = new Date();

  const handleClose = () => {
    setCreateMode(false);
    setShow(false);
  };

  const handleCreate = () => {
    if(inputRef.current.value.trim()){
      const newTodo = {
        title: inputRef.current.value.trimStart(),
        id: Date.now(),
        completed: false,
        deadline: new Date(dateRef.current.value).getTime(),
      };
      addTodo(newTodo)
      setCreateMode(false)
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <span>Title</span>
          <input
            title="Todo title"
            type="text"
            ref={inputRef}
            className="form-control ms-5 border-primary border-2"
            autoFocus={true}
            spellCheck="false"
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span>Deadline</span>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
