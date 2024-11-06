// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteToDo = () => {
    deleteTodo(id)
  }
  return (
    <li className="item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteToDo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
