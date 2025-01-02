import { useState } from 'react';
import './App.css';
import Button from './components/Button/button';
import { Back } from './components/Icons/icons';
import GameResult from './models/gameResults';
import { Step } from './steps';
import Game, { COLORS } from './steps/Game/game';
import Result from './steps/Result/result';
import Tutorial from './steps/Tutorial/tutorial';

const App = () => {

	const [currentStep, setCurrentStep] = useState<Step>(Step.TUTORIAL);
	const [gameResult, setGameResult] = useState<GameResult>();

	return (
		<div className="container">
			<header>
				<h1>{[..."Stroop's Test"].map((c, index) => <span key={index} style={{ color: COLORS[index] || "grey" }}>{c}</span>)}</h1>
			</header>
			<div className="content">
				<Button className="back-button s-size" hidden={currentStep === Step.TUTORIAL} onClick={() => setCurrentStep(Step.TUTORIAL)}>
					<Back />
				</Button>
				{currentStep === Step.TUTORIAL && (
					<Tutorial onGameStart={() => setCurrentStep(Step.GAME)} />
				)}
				{currentStep === Step.GAME && (
					<Game onGameEnd={(gameResult: GameResult) => { setGameResult(gameResult); setCurrentStep(Step.RESULT); }} />
				)}
				{currentStep === Step.RESULT && (
					<Result gameResult={gameResult!} onNewGame={() => setCurrentStep(Step.GAME)} />
				)}
			</div>
		</div>
	)
}

export default App;