import { useState, useEffect } from "react";
import "./carousel.css";

export default function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(""); // State to track the direction of movement
    const [isAnimating, setIsAnimating] = useState(false); // Cooldown state
    const [isIdle, setIsIdle] = useState(false); // Track if the carousel is idle

    const behindIndex = (currentIndex - 1 + items.length) % items.length; // Dynamically calculate the index behind
    const forwardIndex = (currentIndex + 1) % items.length; // Dynamically calculate the index forward
    const secondForwardIndex = (currentIndex + 2) % items.length; // Dynamically calculate the index two forward

    // Idle animation logic
    useEffect(() => {
        if (!isIdle) return; // Stop idle animation if the user interacts

        const interval = setInterval(() => {
            if (!isAnimating) {
                handleUp(); // Move forward automatically
            }
        }, 5000); // Move every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [isIdle, isAnimating, currentIndex]);

    function handleUp() {
        if (isAnimating) return; // Prevent interaction during cooldown
        setIsAnimating(true); // Start cooldown
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Move forward
        setDirection("moving-forward"); // Set direction to forward
        setTimeout(() => setIsAnimating(false), 500); // End cooldown after 0.5s
    }

    function handleDown() {
        if (isAnimating) return; // Prevent interaction during cooldown
        setIsAnimating(true); // Start cooldown
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length); // Move backward
        setDirection("moving-back"); // Set direction to backward
        setTimeout(() => setIsAnimating(false), 500); // End cooldown after 0.5s
    }

    function handleDotSelection(index) {
        if (isAnimating) return; // Prevent interaction during cooldown
        setIsAnimating(true); // Start cooldown
        setCurrentIndex(index);
        setDirection("no-animation");
        setTimeout(() => setIsAnimating(false), 500); // End cooldown after 0.5s
        setIsIdle(false); // Stop idle animation on interaction
    }

    if (!items || items.length === 0) {
        return <div className="carousel">No items to display</div>;
    }

    return (
        <div
            className="carousel"
            onMouseEnter={() => setIsIdle(false)} // Stop idle animation on hover
            onTouchStart={() => setIsIdle(false)} // Stop idle animation on touch
            onMouseLeave={() => setIsIdle(true)} // Resume idle animation on mouse leave
            onTouchEnd={() => setIsIdle(true)} // Resume idle animation on touch end
        >
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div
                        className={`carousel-item ${
                            index === currentIndex
                                ? "active"
                                : index === behindIndex
                                ? "behind"
                                : index === forwardIndex
                                ? "forward"
                                : index === secondForwardIndex
                                ? "second-forward"
                                : "hidden"
                        } ${direction}`}
                        key={index}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="dots">
                {items.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>

            <div className="controls">
                <i className="fa-solid fa-angle-left" onClick={handleDown}></i>
                <i className="fa-solid fa-angle-right" onClick={handleUp}></i>
            </div>
        </div>
    );
}