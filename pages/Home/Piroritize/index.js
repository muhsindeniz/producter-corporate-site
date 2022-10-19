import React, { useEffect, useState } from 'react'
import styles from "../Piroritize/Piroritize.module.css"

const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 2000 }) => {
    const countTo = parseInt(children, 10);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(countTo * progress);

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }, []);

    return Math.floor(count);
};

const Piroritize = () => {

    return (
        <div className={styles.Prirotize}>
            <div className='d-flex justify-content-between align-items-center'>
                <div className={styles.Cards}>
                    <div className={styles.Card}>
                        <span className={styles.counts}>
                            <CountUpAnimation duration={5000}>650</CountUpAnimation>+</span>
                        <div className={styles.CardTitle}>Producter users created <div>650+ workspaces.</div></div>
                        <div className={styles.HastageType}>
                            <span className={styles.Hashtage}><i>#customercentric</i></span>
                        </div>
                    </div>
                    <div className={styles.Card}>
                        <span className={styles.counts}><CountUpAnimation duration={5000}>130</CountUpAnimation>+</span>
                        <div className={styles.CardTitle}>People from 130+ countries visited to explore Producter.</div>
                        <div className={styles.HastageType}>
                            <span className={styles.Hashtage}><i>#buildinpublic</i></span>
                        </div>

                    </div>

                    <div className={styles.Card}>
                        <span className={styles.counts}><CountUpAnimation duration={5000}>900</CountUpAnimation>+</span>
                        <div className={styles.CardTitle}>Product people joined our <div>waitlist to try Producter</div></div>
                        <div className={styles.HastageType}>
                            <span className={styles.Hashtage}><i>#productledgrowth</i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Piroritize