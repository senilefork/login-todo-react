import "./NewTodoForm.css"
const NewTodoForm = ({ handleSubmit, handleChange, todo }) =>{

  return(
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         name="todo"
         value={todo}
         onChange={handleChange}
         maxLength="25"
         placeholder="new todo"

        />
        {todo.length < 1 ? 
          <button className="save-todo-button-disabled" disabled={true}>
           Save
          </button> :
          <button className="save-todo-button" disabled={false}>
          Save
         </button>
        }
      </form>
    </div>
  )
}

export default NewTodoForm;