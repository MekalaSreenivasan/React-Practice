import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInputs, setUserInputs] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = userInputs.intialInvestment > 0 && userInputs.annualInvestment > 0 &&
                        userInputs.expectedReturn > 0 && userInputs.duration > 0;

  function handleUserInputs(inputKey, value) {
      setUserInputs((prevInputs) => {
          return {
              ...prevInputs,
              [inputKey]: +value
          }
      })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInputs} userInputs={userInputs} />
      {!isInputValid && <p className="center">Please enter values greater than ZERO</p>}
      {isInputValid && <Results userInputs={userInputs}/>}
    </>
  )
}

export default App
