import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({userInputs}) {
    const resultsData = calculateInvestmentResults(userInputs);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intereset (Year)</th>
                <th>Total Interest</th>
                <th>Invested Amount</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((data) => {
                const totalInterestEarned = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment; 
                const totalAmountInvested = data.valueEndOfYear - totalInterestEarned;
                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterestEarned)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>    
}