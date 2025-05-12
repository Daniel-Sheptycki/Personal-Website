import { useEffect } from "react";
import "./hero.css";

export default function Hero({ onAnimationComplete }) {
    useEffect(() => {
        const animationDuration = 3500;
        const timer = setTimeout(() => {
            onAnimationComplete(); // Notify parent that Hero animations are complete
        }, animationDuration);

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [onAnimationComplete]);

    return (
        <section className="hero">
            <header>
                <h1>Daniel <span>Sheptycki</span></h1>
            </header>
            <div className="headshot">
                <div className="img-wrapper">
                    <img src="./hero-headshot.jpg" alt="Headshot" />
                </div>
            </div>
            <div className="sub-title">
                <div>
                    <p><a href="#education">Student</a></p>
                </div>
                <div>
                    <p><a href="#about">Innovator</a></p>
                </div>
                <div>
                    <p><a href="#projects">Developer</a></p>
                </div>
            </div>
            <div className="bottom-border"></div>
        </section>
    );
}