import Button from "../../components/Button/button";
import callback from "../../models/callback";
import GameResult from "../../models/gameResults";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;

const Result = ({ gameResult, onNewGame }: { gameResult: GameResult, onNewGame: callback }) => {
    return (
        <section>
            <h2>Your Score is: {gameResult.score}/{ROUNDS}</h2>
            <h3>You completed the test in: {(gameResult.gameTime / 1000).toFixed(2)} seconds</h3>
            <Button onClick={onNewGame}>Play again!</Button>
        </section>
    )
}

export default Result;