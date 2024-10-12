import { useRef, useState } from 'react';

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();
  function handleSubmit(event) {
    //Below line helps in stopping form submission call to backend
    event.preventDefault();
    console.log(email.current.value);
    //event.target.reset(); //In-built reset method called
    //Validation is done on submitting form
    if (!email.current.value.includes('@')) {
      setFormIsInvalid(true);
      return;
    }
    setFormIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" 
            type="email" 
            name="email" ref={email}  />
          <div className='control-error'>
            {formIsInvalid && <p>Pease enter valid value</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={password}
          />
        </div>
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
