import validate from "../helpers/validate";
import useForm from "../hooks/useForm";
import "./Login.css";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

//log in form inherits login function from app component
const LoginForm = ( { login } ) =>{
  
  const { formData, handleChange, handleSubmit, errors, loginErrors } = useForm(login, validate);

  return(
      <div className="login-form-container">
        <div className="login-header">
          <h1>Rapptr Labs</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-inputs">
           <p className="input-header">Email</p>
           <div className={errors.email ? "error" : "input-div"}>
             <HiOutlineMail className="icon" />
             <input 
             type="text"
             name="email"
             placeholder="Email address"
             value={formData.email || ""}
             onChange={handleChange}
             required=""/>
           </div>
           {errors.email && <span>{errors.email}</span>}
           <p className="input-header">Password</p>
           <div className={errors.password ? "error" : "input-div"}>
             <HiOutlineLockClosed className="icon" />
             <input 
             type="password"
             name="password"
             placeholder="Must be at least 4 characters"
             value={formData.password || ""}
             onChange={handleChange}
             required=""/>
           </div>
           {errors.password && <span>{errors.password}</span>}
           
           {errors.email || errors.password || !formData.email  || !formData.password ? 
           <button disabled={true} className="disabled-login-button">Login</button> :
           <button disabled={false} className="login-button">Login</button> 
           }
           
        {loginErrors.length > 0 ? <span>{loginErrors}</span> : null}
          </div>
        </form>      
      </div>
  )
}

export default LoginForm;
