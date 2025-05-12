import { useEffect, useState } from 'react';
import './project-article.css';
import ProjectArticleSection from './ProjectArticleSection';

export default function ProjectArticle({ title, timeframe, sections, onDeSelect, active }) {

    const [hasBeenActive, setHasBeenActice] = useState(false);

    useEffect(() => {
        if (active) {
            document.body.classList.add('no-scroll'); // Disable scrolling
            !hasBeenActive && setHasBeenActice(true);
        } else {
            document.body.classList.remove('no-scroll'); // Enable scrolling
        }

        return () => {
            document.body.classList.remove('no-scroll'); // Cleanup on unmount
        };
    }, [active]);

    return (
        <article className={`project-article ${active ? 'active' : hasBeenActive? 'hidden' : ''} `}>
            <div className='content-wrapper'>
                <i className="fa-solid fa-circle-arrow-left" onClick={onDeSelect}></i>
                <header>
                    <h1>{title}</h1>
                    <p className='time-frame'>{timeframe}</p>
                </header>
                {sections.map((section, index) => (
                    <ProjectArticleSection key={`project-section-article-${index}`} image={section.image} title={section.title} paragraph={section.paragraph}/>
                ))}
                <button className='back-button' onClick={onDeSelect}>Return</button>
            </div>
        </article>
    );
}