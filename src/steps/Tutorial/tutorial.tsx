import Button from "../../components/Button/button";
import callback from "../../models/callback";

const ROUNDS: number = import.meta.env.VITE_GAME_ROUNDS;

const Tutorial = ({ onGameStart }: { onGameStart: callback }) => {
    return (
        <>
            <section>
                <h2>Stroop Test</h2>
                <p>
                    It' a test to evaluate an individual's delay in reaction time between incongruent stimuli.
                    <br /><br />
                    You'll be shown {ROUNDS} words, each representing a specific color but written in a different one.
                    <br />
                    For each word you'll have to pick between multiple choices the color the word is written in, not the one it's spelling.
                    <br />
                    For example: if the word <span className="bold purple">PURPLE</span> is shown, you'll have to pick RED,
                    if the word <span className="bold green">ORANGE</span> is shown, you'll have to pick GREEN and so on...
                    <br /><br />
                    Want to know more?
                    <br />
                    Here's the link to <a href='https://en.wikipedia.org/wiki/Stroop_effect'>Stroop's Effect Wikipedia Page</a>
                </p>
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