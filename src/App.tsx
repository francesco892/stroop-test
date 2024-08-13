import { useState } from 'react';
import './App.css';
import Button from './components/Button/button';
import ButtonGroup from './components/ButtonGroup/buttonGroup';
import { Home } from './components/Icons/icons';
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
        <ButtonGroup>
          <Button key={"home-" + currentStep} hidden={currentStep === Step.TUTORIAL} size="s" onClick={() => setCurrentStep(Step.TUTORIAL)}>
            <Home />
          </Button>
        </ButtonGroup>
        <h1>{[..."Stroop's Test"].map((c, index) => <span key={index} style={{ color: COLORS[index] || "black" }}>{c}</span>)}</h1>
        <ButtonGroup>
        </ButtonGroup>
      </header>
      <div className="content">
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