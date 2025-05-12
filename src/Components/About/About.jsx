import { useEffect, useRef, useState } from "react";
import "./about.css";

export default function About({ onAnimationComplete }) {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger About animations
                }
            },
            { threshold: 0.4 } // Trigger when 40% of the section is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const animationDuration = 4700; // Match CSS animation duration
            const timer = setTimeout(() => {
                onAnimationComplete(); // Notify parent that About animations are complete
            }, animationDuration);

            return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
    }, [isVisible, onAnimationComplete]);

    return (
        <section
            id="about"
            className={`about ${isVisible ? "animate" : ""}`}
            ref={aboutRef}
        >
            <header>
                <h2>My Mission</h2>
            </header>
            <p className="main-text">
                <span className="sentance-1">
                    - <span className="strong">Innovative</span>, <span className="strong">Creative</span> and <span className="strong">Efficient</span> Software Developer with a passion for finding solutions.
                </span>
                <span className="sentance-2">
                    - With a strong foundation in front-end development and an itch to solve problems,
                    my mission is to <span className="strong">innovate wherever possible <span className="exuent-from-bold">and</span> never stop learning</span>.
                </span>
                <span className="special">
                    <span>'<s> It's too hard for me to learn.</s> '</span>
                    <span className="real">' <em>It's hard, but I can learn it.</em> '</span>
                </span>
                <span className="sentance-3">
                    - As technology, AI, and programming continue to evolve, I’m <span className="strong">right there with it</span>.
                </span>
            </p>
            <div className="bottom-border"></div>
        </section>
    );
}