const TodoList = (props) => {
  return (
    <div>
      {props.todos &&
        props.todos.map((todo) => (
          <li key={todo.name} aria-label="list-todo">
            {todo.name}
          </li>
        ))}
    </div>
  )
}

export default TodoList
