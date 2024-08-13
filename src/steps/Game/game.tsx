import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import ButtonGroup from "../../components/ButtonGroup/buttonGroup";
import GameResult from "../../models/gameResults";
import { getRandomElement, getRandomElements, shuffleArray } from "../../utils/randomizer";
import "./game.css";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;
const CHOICES: number = import.meta.env.VITE_GAME_CHOICES;
export const COLORS = ["brown", "red", "orange", "yellow", "green", "blue", "purple", "pink", "grey"];

const Game = ({ onGameEnd }: { onGameEnd: (gameResult: GameResult) => void }) => {

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
    const randomChoices = getRandomElements(COLORS.filter(c => !forcedChoices.includes(c)), CHOICES - 2);
    const choices = shuffleArray([...forcedChoices, ...randomChoices]);

    const onChoiceButtonClick = (c: string) => {
        if (c === color) {
            setScore(score + 1);
        }
        setRound(round + 1);
    }

    return (
        <section>
            <h1 className="current-color" style={{ color }}>{colorName}</h1>
            <ButtonGroup expanded>
                {choices.map((c, index) => <Button key={index + "-" + c} onClick={() => onChoiceButtonClick(c)}>{c}</Button>)}
            </ButtonGroup>
        </section>
    )
}

export default Game;