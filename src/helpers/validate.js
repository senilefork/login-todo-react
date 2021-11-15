export default function validate(data) {
    let errors = {};
    if (!data.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please provide valid email';
    } else if(data.email.length > 50){
        errors.email = 'Email cannot be longer than 50 characters';
    }

    // if(!data.password){
    //     errors.password = 'Please enter password';
    // } else 
    if(data.password && data.password.length < 4){
        errors.password = "Password must be at least 4 characters"
    } else if(data.password && data.password.length > 16){
        errors.password = "Password must be less than 16 characters"
    } else if(data.password === ""){
      errors.password = "Password is required"
    }
    return errors;
  };