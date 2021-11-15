import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import TodoPage from "../todos/TodoPage";
import React from "react";
import { useHistory } from "react-router";

const Routes = ({ login, setCurrentUser }) =>{

  const history = useHistory();

  function logout(){
    setCurrentUser(null);
    history.push("/")
    }

    return(
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/todo-list">
          <TodoPage logout={logout}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
    )
}

export default Routes;