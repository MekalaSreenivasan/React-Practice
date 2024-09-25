import { useState } from 'react';
//import { styled } from 'styled-components';
import Button from './Button';
import Input from './Input';

/*const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`*/

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) => handleInputChange('password', event.target.value)}
        />        
        {/*<p>
          <Label $invalid={emailNotValid}
          //className={`label ${emailNotValid ? 'invalid' : ''}`}
          >Email</Label>
          {/**
           * To add class name conditionally with default class name
           * <label className={`label ${emailNotValid ? 'invalid' : ''}`}
           
          <Input
            type="email" $invalid={emailNotValid}
            //style={{backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'}}
            //className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}
          //className={`label ${passwordNotValid ? 'invalid' : ''}`}
          >Password</Label>
          <Input
            type="password" $invalid={emailNotValid}
            //className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>*/}
      </div>
      <div className="flex justify-end gap-4">
        <Button type="button" className="text-amber-400 hover:text-amber-500"
          //className="text-button"
          >
          Create a new account
        </Button>
        <Button 
        //className='button' 
        onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
