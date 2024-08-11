import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import ButtonGroup from "../../components/ButtonGroup/buttonGroup";
import callback from "../../models/callback";
import GameResult from "../../models/gameResults";
import { getRandomElement, getRandomElements, shuffleArray } from "../../utils/randomizer";
import "./game.css";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;
const COLORS = ["red", "green", "blue", "yellow", "orange", "purple", "brown", "pink", "grey"];

const Game = ({ onGameEnd, onGameCancel }: { onGameEnd: (gameResult: GameResult) => void, onGameCancel: callback }) => {

    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);
    const [startTimestamp] = useState(new Date().getTime());

    const [colorName, setColorName] = useState(getRandomElement(COLORS));
    const [color, setColor] = useState(getRandomElement(COLORS));

    useEffect(() => {
        if (round !== 0) {
            if (round < ROUNDS) {
                setColor(getRandomElement(COLORS));
                setColorName(getRandomElement(COLORS));
            } else {
                onGameEnd({ score: score, gameTime: new Date().getTime() - startTimestamp });
            }
        }
    }, [round, score, onGameEnd, startTimestamp]);

    const forcedChoices = [color, colorName];
    const randomChoices = getRandomElements(COLORS.filter(c => !forcedChoices.includes(c)), 2);
    const choices = shuffleArray([...forcedChoices, ...randomChoices]);

    const onChoiceButtonClick = (c: string) => {
        if (c === color) {
            setScore(score + 1);
        }
        setRound(round + 1);
    }

    return (
        <section>
            <Button size="s" className="top-right" onClick={onGameCancel} >
                Back
            </Button>
            <h1 style={{ color }}>{colorName}</h1>
            <ButtonGroup>
                {choices.map((c, index) => <Button key={index} onClick={() => onChoiceButtonClick(c)}>{c}</Button>)}
            </ButtonGroup>
        </section>
    )
}

export default Game;