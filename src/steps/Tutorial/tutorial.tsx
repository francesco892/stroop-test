import Button from "../../components/Button/button";
import callback from "../../models/callback";
import "./tutorial.css";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;

const Tutorial = ({ onGameStart }: { onGameStart: callback }) => {
    return (
        <>
            <section>
                <header>
                    <h2>Stroop's Test</h2>
                </header>
                <div className="game-desc">
                    <div className="desc-section">
                        <h4>What is it?</h4>
                        <p>
                            It's a test to evaluate an individual's reaction time after being provided incongruent stimuli.
                        </p>
                    </div>
                    <div className="desc-section">
                        <h4>How does it work?</h4>
                        <p>
                            You'll be shown {ROUNDS} words, each representing a specific color but written in a different one.
                            <br />
                            For each word you'll have to pick between multiple choices the color the word is written in, not the one it's spelling.
                            <br />
                            For example: if the word <span className="bold purple">purple</span> is shown, you'll have to pick red,
                            if the word <span className="bold green">orange</span> is shown, you'll have to pick green and so on...
                        </p>
                    </div>
                    <div className="desc-section">
                        <h4>Want to know more?</h4>
                        <p>
                            Here's the link to <a href='https://en.wikipedia.org/wiki/Stroop_effect' target="_blank" rel="noopener noreferrer">Stroop's Effect Wikipedia Page</a>
                        </p>
                    </div>
                </div>

            </section>
            <section>
                <h2>Are you ready?</h2>
                <Button size='l' onClick={onGameStart}>
                    Start the test
                </Button>
            </section>
        </>
    )
}

export default Tutorial;