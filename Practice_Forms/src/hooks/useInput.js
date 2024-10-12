import {useState} from 'react';

export function useInput(defaultValue, validationFn) {
  const [input, setInput] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false); 
  const isInputValid = validationFn(input);
  
  function handleInputChange(event) {
    setInput(event.target.value);
    setIsEdited(false);
  }

  function handleInputBlur() {
    setIsEdited(true);
  }
  
  return {
    value: input,
    handleInputChange,
    handleInputBlur,
    hasError: isEdited && !isInputValid
  };
}