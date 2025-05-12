import { useEffect, useRef, useState } from "react";
import "./experience.css";
import Position from "./Position";

export default function Experience({ onAnimationComplete }) {
    const experienceRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger Experience animations
                }
            },
            { threshold: 0.2 }
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const animationDuration = 600; // Match CSS animation duration
            const timer = setTimeout(() => {
                onAnimationComplete(); // Notify parent that About animations are complete
            }, animationDuration);

            return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
    }, [isVisible, onAnimationComplete]);

    return (
        <section
            id="experience"
            className={`experience ${isVisible ? "animate" : ""}`}
            ref={experienceRef}
        >
            <header>
                <h2>Experience</h2>
            </header>
            <div className="experience-content">
                <div className="positions">
                    <header>
                        <h3>Positions</h3>
                    </header>

                    <Position
                        positionTitle={'Full Stack Digital Transformation Intern'} 
                        timeframe={'April 2024 - Present'} 
                        location={'Focused Forward, Remote.'}
                        description={[
                            'Collaborated within a tight-knit team of developers to design, develop and maintain web applications using React, Node.js, firebase and more.',
                            'Followed full stages of software development, showing attention to detail in preperation and planning through figma, to development and testing through demos.',
                            'Continuing to stay in complete communication with my team members and employers to ensure that everything is going smoothly.',
                        ]}
                        skillsUsed={[
                            'ReactJS', 
                            'Figma', 
                            'Agile Methodologies',
                            'Firebase',
                            'HTML & CSS', 
                            'JS', 
                            'Teamwork', 
                            'Communication', 
                            'Problem Solving', 
                            'Design', 
                            'Time Management'
                        ]}
                    />
                    <Position 
                        positionTitle={'Camp Counselor'} 
                        timeframe={'June 2024 - August 2024'} 
                        location={'Code Cobras Inc, Winnipeg, MB.'}
                        description={[
                            'Worked closely with my co-workers and employers to create an educational, safe, fun and productive environment for the kids.',
                            'Taught kids lessons on coding, A.I and more as well as resolving conflicts between kids.',
                            'Interacted with parents daily, paid strong attention to detail on specifics such as allergies, medications, pick up & drop off and more.',
                        ]}
                        skillsUsed={[
                            'Python', 
                            'C++',
                            'ReactJS',
                            'HTML & CSS',
                            'JS',
                            'Teamwork',
                            'Communication',
                            'Problem Solving',
                            'Leadership',
                        ]}
                    />
                    <Position
                        positionTitle={'Volunteer Staff'}
                        timeframe={'July 2021 - September 2021'}
                        location={'Treherne Community Center, Treherne, Mb'}
                        description={[
                            'Collaborated with the other volunteers at the community center to provide a safe, fun and comfortable experience for the kids, ensuring that everything was going well at all times.',
                            'Strong experience was obtained in communicating and interacting with people of all ages, but specifically younger children around ages 6-12.',
                        ]}
                        skillsUsed={[
                            'Teamwork',
                            'Communication',
                            'Problem Solving',
                            'Time Management',
                            'Adaptability',
                            'Leadership'
                        ]}
                    />
                </div>
                <div className="education">
                    <header>
                        <h3>Education</h3>
                    </header>
                    <div className="content">
                        <Position
                            positionTitle={'Full Stack Developer'}
                            timeframe={'Sep 2023 - June 2025'}
                            location={'Manitoba Institute of Trades and Technology, Winnipeg, MB.'}
                            description={[
                                'Expected to graduate from MITT in 2025 with a certificate in full stack development.',
                            ]}
                        />
                        <Position
                            positionTitle={'High School'}
                            timeframe={'Sep 2023 - June 2025'}
                            location={'Pembina Trails Collegiate, Winnipeg, MB.'}
                            description={[
                                'Expected to graduate with a Highschool Diploma from Pembina Trails Collegiate in 2025.'
                            ]}
                        />
                    </div>
                </div>
                <div className="skills">
                    <header>
                        <h3>Skills</h3>
                    </header>
                    <div className="content">
                        <div className="hard-skills">
                            <header>
                                <h4>Hard Skills</h4>
                            </header>
                            <ul className="skills-list">
                                <li>HTML & CSS - <span className="time">6 Years</span></li>
                                <li>C# - <span className="time">6 Years</span></li>
                                <li>JavaScript - <span className="time">4 Years</span></li>
                                <li>Git & GitHub - <span className="time">3 Years</span></li>
                                <li>React - <span className="time"> 2 Years</span></li>
                                <li>Node.js - <span className="time"> 2 Years</span></li>
                                <li>Firebase - <span className="time">2 Years</span></li>
                            </ul>
                        </div>
                        <div className="soft-skills">
                            <header>
                                <h4>Soft Skills</h4>
                            </header>
                            <ul className="skills-list">
                                <li>Teamwork</li>
                                <li>Communication</li>
                                <li>Problem Solving</li>
                                <li>Attention to Detail</li>
                                <li>Time Management</li>
                                <li>Adaptability</li>
                                <li>Leadership</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-border"></div>
        </section>
    );
}