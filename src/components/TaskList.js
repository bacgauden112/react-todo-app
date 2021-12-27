import { useState } from "react";
import { FILTER_MAP } from "../App";
import Edit from "./Edit";
import Todo from "./Todo";

function TaskList(props) {
  const [editAction, setEditAction] = useState(null);
  if(editAction) {
    return (
      <Edit 
      id={editAction.id}
      name={editAction.name}
      setEditAction={setEditAction}
      editTask={props.editTask}
      />
    )
  } else {
    const taskList = props.data
    ?.filter(FILTER_MAP[props.filter])
    .map((task) => {
      return (
        <Todo
          key={task.id}
          name={task.name}
          id={task.id}
          completed={task.completed}
          toggleTaskCompleted={props.toggleTaskCompleted}
          deleteTask={props.deleteTask}
          setEditAction={setEditAction}
        />
      );
    });
    return (
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    );
  }
}

export default TaskList;
