import { useState } from 'react';
import './App.css';
import GameResult from './models/gameResults';
import { Step } from './steps';
import Game from './steps/Game/game';
import Result from './steps/Result/result';
import Tutorial from './steps/Tutorial/tutorial';

const App = () => {

  const [currentStep, setCurrentStep] = useState<Step>(Step.TUTORIAL);
  const [gameResult, setGameResult] = useState<GameResult>();

  return (
    <div className="container">
      {currentStep === Step.TUTORIAL && (
        <Tutorial onGameStart={() => setCurrentStep(Step.GAME)} />
      )}
      {currentStep === Step.GAME && (
        <Game
          onGameEnd={(gameResult: GameResult) => { setGameResult(gameResult); setCurrentStep(Step.RESULT); }}
          onGameCancel={() => setCurrentStep(Step.TUTORIAL)}
        />
      )}
      {currentStep === Step.RESULT && (
        <Result gameResult={gameResult!} onBack={() => setCurrentStep(Step.TUTORIAL)} onNewGame={() => setCurrentStep(Step.GAME)} />
      )}
    </div>
  )
}

export default App;