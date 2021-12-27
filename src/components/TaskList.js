import { useState } from "react";
import Todo from "./Todo";

function TaskList(props) {
  const [isEditing, setEditing] = useState(false);
  const taskList = props.data?.map((task) => {
    return (
      <Todo
        key={task.id}
        name={task.name}
        id={task.id}
        completed={task.completed}
        toggleTaskCompleted={props.toggleTaskCompleted}
        deleteTask={props.deleteTask}
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

export default TaskList;
