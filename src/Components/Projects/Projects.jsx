import { useEffect, useRef, useState } from 'react';
import Carousel from './Carousel/ProjectsCarousel';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function Projects({ setActiveArticle }) {
    const projectsRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger animations when visible
                }
            },
            { threshold: 0.5 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    const ptcBlocksCard = (
        <ProjectCard
            title={'PTC Blocks'}
            description={
                "PTC Blocks is a web app I made using ReactJS and Firebase for my high-school's phys-ed program."
            }
            imgsrc={'./techmbscholarship-image.jpg'}
            onClick={() => {
                setActiveArticle(0);
            }}
        />
    );

    const fundamentaCard = (
        <ProjectCard
            title={'Fundamenta'}
            description={
                'Fundamenta is a web app that seamlessly represents fundamental analysis data of companies in a completely customizable way.'
            }
            imgsrc={'./fundamenta-picture1.jpg'}
            onClick={() => {
                setActiveArticle(1)
            }}
        />
    );

    const macroTrackerCard = (
        <ProjectCard
            title={'Macro Tracker'}
            description={
                'Macro Tracker is a mobile-first web app that allows you to track the macro-nutrients of your food.'
            }
            imgsrc={'./macro-tracker-picture1.jpg'}
            onClick={() => {
                setActiveArticle(2)
            }}
        />
    );

    const evolaterCard = (
        <ProjectCard
            title={"Evolater"}
            description={"This is an example description of a project that i made with a group during my Applied Agile Development course at MITT"}
            imgsrc={
                './evolater-picture1.png'
            }
            onClick={() => {
                setActiveArticle(3)
            }}
        />
    )

    const gamesCard = (
        <ProjectCard
            title={"Fun Projects"}
            description={"A Collection of all the 'game' style webapps that i have made across the years to practice different aspects of development."}
            imgsrc={
                'data:image/jpeg;base64,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'
            }
            onClick={() => {
                setActiveArticle(4)
            }}
        />
    )

    const placeHolderCard = (
        <ProjectCard
            title={'Placeholder'}
            description={'This is a placeholder card.'}
            imgsrc={
                'data:image/jpeg;base64,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'
            }
            onClick={() => {
                setActiveArticle(4)
            }}
        />
    );

    return (
        <section
            id="projects"
            className={`projects ${isVisible ? 'animate' : ''}`}
            ref={projectsRef}
        >
            <header>
                <h2>Projects</h2>
            </header>
            <div className="content">
                <Carousel
                    items={[
                        ptcBlocksCard,
                        fundamentaCard,
                        macroTrackerCard,
                        evolaterCard,
                        gamesCard,
                    ]}
                />
            </div>
            <div className="bottom-border"></div>
        </section>
    );
}