export default function GameBoard({ onSquareSelect, board }) {
/**     const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquareSelection(rowIdx, colIdx) {
        setGameBoard((prevGameBoard) => {
            //Always create a copy and then update the value of state
            const updatedGameBoard = [...prevGameBoard.map(innerArr =>[...innerArr])];
            updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
            return updatedGameBoard;
        });

        onSquareSelect();
    }
*/
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIdx) => 
                            <li key={colIdx}>
                                <button 
                                    onClick={() => onSquareSelect(rowIndex, colIdx)}
                                    disabled={col!= null}>
                                        {col}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}