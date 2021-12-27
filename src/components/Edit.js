import { useState } from "react";

export default function Edit(props) {
  const [name, setName] = useState(props.name);

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, name)
    props.setEditAction(null)
  }

  return (
    <form className="stack-small"  onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" value={name} onChange={(e) => { setName(e.target.value);}}/>
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => props.setEditAction(null)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button
         type="submit"
         className="btn btn__primary todo-edit" 
         >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
}
