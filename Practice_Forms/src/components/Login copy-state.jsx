//import { useState } from 'react';
import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function StateLogin() {
  //Below is one type of setting state and values
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleEmailChange(event){
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }*/

  //Below is another example of setting state and values
  /*const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false
  });

  //Validating on everykey stroke
  const emailIsInvalid = isEdited.email && isEmail(inputs.email) && !isNotEmpty(inputs.email);
  const passwordIsInvalid = isEdited.password && !hasMinLength(inputs.password, 6);

  function handleInputChange(identifier, value) {
    setInputs(prevValues => ({
      ...prevValues,
      [identifier]:value
    }));
    setIsEdited(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }*/

  /*function handleInputBlur(identifier) {
    setIsEdited(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }*/

  const {
    value: email, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailError
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: password,
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError   
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    //Below line helps in stopping form submission call to backend
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    console.log(email, password);
    //Before sending request or saving to backend some validation has to be added
  }    

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email"
              id="email" 
              type="email" 
              name="email"
              value={email}
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
              error={emailError && 'Please enter a valid Mail ID'} 
        />
        <Input label="Password"
              id="password" 
              type="password" 
              name="password"
              value={password}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              error={passwordError && 'Please enter password with minimum length 6'} 
        />          
        {/*<div className="control no-margin">
          <label htmlFor="email">Email</label>
          Type 1 example- having different state
          <input id="email" 
            type="email" 
            name="email" 
            value={email}
            onChange={handleEmailChange} />
          <input id="email" 
            type="email" 
            name="email" 
            value={inputs.email}
            onBlur={() => handleInputBlur('email')}
            onChange={() => handleInputChange('email', event.target.value)} />  
            <div className='control-error'>
              {emailIsInvalid && <p>Please enter a valid mail ID</p>}
            </div>          
        </div>*/}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/**one way of stopping backend call on clicking submit button is form is to add type="button"
         * to the submit button
         * <button type="button" className="button" onClick={handleSubmit}>Login</button>
         */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
