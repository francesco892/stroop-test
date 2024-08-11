import Button from "../../components/Button/button";
import ButtonGroup from "../../components/ButtonGroup/buttonGroup";
import callback from "../../models/callback";
import GameResult from "../../models/gameResults";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;

const Result = ({ gameResult, onBack, onNewGame }: { gameResult: GameResult,onBack: callback, onNewGame: callback }) => {
    return (
        <section>
            <h2>Your Score is: {gameResult.score}/{ROUNDS}</h2>
            <h3>You completed the test in: {(gameResult.gameTime / 1000).toFixed(2)} seconds</h3>
            <ButtonGroup>
                <Button onClick={onBack} hoverable>Back to Home</Button>
                <Button onClick={onNewGame} hoverable>Try again!</Button>
            </ButtonGroup>
        </section>
    )
}

export default Result;