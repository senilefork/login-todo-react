import "./Todo.css";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
const Todo = ({todo, editing, setEditing, editingInput, setEditingInput, handleSubmitEdit, handleDelete}) => {
  
  return(
                <div className="todo-container">
                 {editing === todo.id ? 
                   <input 
                   type="text"
                   value={editingInput}
                   onChange={(e) => setEditingInput(e.target.value)}
                   maxLength="25"
                   className="edit-input"
                    /> :
                   <div className="todo-text">
                     <p>
                      {todo.text}
                     </p>
                   </div>}
                  {editing ===  todo.id ?
                   <button className="submit-edit-button" disabled={editingInput.length > 1 ? false : true } onClick={() => handleSubmitEdit(todo.id)}>Submit</button> :
                   <div className="edit-delete">
                   <AiOutlineDelete className="delete-icon" size="25" onClick={() => handleDelete(todo.id)} />
                   <GrFormEdit className="edit-icon" size="25" onClick={() => {
                     setEditing(todo.id);
                     setEditingInput(todo.text)
                   }}/>
                   </div>}
                 </div>
    )
}

export default Todo;