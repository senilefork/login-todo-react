import { useState } from 'react';
import { useHistory } from "react-router";

const useForm = (callback, validate) => {

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState([]);
  const history = useHistory();

  async function handleSubmit (e) {
      e.preventDefault();
      let res = await callback(formData);
      if(res.loggedIn){
        setFormData({})
        history.push('/todo-list');
      } else {
        setLoginErrors(res.errors.response.data.message)
      }
  }
  
  const handleChange = e =>{
    e.persist();
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    }
    setFormData(newFormData);
    setErrors(validate(newFormData));
  }

  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
    loginErrors
  }
};

export default useForm;