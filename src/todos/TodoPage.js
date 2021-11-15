import { useState, useEffect, useContext } from "react";
import Todo from "./Todo";
import SearchBar from "./SearchBar";
import NewTodoForm from "./NewTodoForm";
import "./TodoPage.css"
import UserContext from "../context/UserContext";
import { useHistory } from "react-router";

const TodoPage = ({ logout }) => {

  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  if(!currentUser) history.push('/');

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingInput, setEditingInput] = useState("");
  const [isToggledOn, setIsToggledOn] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    const json = window.localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    window.localStorage.setItem("todos", json);
  }, [todos]);

  const handleChange = e => {
    e.persist();
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
    setIsToggledOn(false);
  }

  const handleDelete = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
  }

  const handleSubmitEdit = (id) => {
      const updatedTodos = todos.map(todo =>{
          if(todo.id === id){
              todo.text = editingInput;
          }
          return todo;
      })
      setTodos(updatedTodos);
      setEditing(null);
      setEditingInput("");
  }

  const toggleSearch = () => {
    setIsToggledOn(!isToggledOn);
  }


 const searchFilter = (string) => {
    if(string) string = string.toLowerCase();
    const filteredList = todos.filter(todo => todo.text.includes(string));
    setFilteredTodos(filteredList);
 }

  
  return(
    <div className="todo-page">
      <div className="top-div">
      
      <h1 className="heading">My To-Do List</h1>
        <div className="logout" onClick={logout}>Logout</div>
      </div>
        <div className="search-todo-div">
            <SearchBar 
            toggleSearch={toggleSearch} 
            searchFilter={searchFilter} 
            searchInput={searchInput} 
            setSearchInput={setSearchInput}/>
            {isToggledOn ? 
            <NewTodoForm 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            todo={todo} /> : null}
          </div>
          <div className="list-div">
            
        {searchInput ? filteredTodos.map(todo => <Todo
                       key={todo.id}
                       todo={todo}
                       editing={editing}
                       setEditing={setEditing}
                       editingInput={editingInput}
                       setEditingInput={setEditingInput}
                       handleSubmitEdit={handleSubmitEdit}
                       handleDelete={handleDelete} />) :
           
                       todos.map(todo => <Todo
                       key={todo.id}
                       todo={todo}
                       editing={editing}
                       setEditing={setEditing}
                       editingInput={editingInput}
                       setEditingInput={setEditingInput}
                       handleSubmitEdit={handleSubmitEdit}
                       handleDelete={handleDelete} />)}
          </div>
    </div>
  )
}

export default TodoPage;