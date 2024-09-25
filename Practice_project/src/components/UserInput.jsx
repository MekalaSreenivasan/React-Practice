import { useState } from "react"

export default function UserInput({userInputs, onChange}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" required 
                    value={userInputs.intialInvestment}
                    onChange={(event) => onChange('intialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" required 
                    value={userInputs.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" required 
                    value={userInputs.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" required 
                    value={userInputs.duration}
                    onChange={(event) => onChange('duration', event.target.value)}/>
            </p>
        </div>        
    </section>
}