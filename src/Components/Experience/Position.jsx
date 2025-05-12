import { useState } from "react";

export default function Position({ positionTitle, timeframe, location, description, skillsUsed }) {
    
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`position ${expanded? 'expanded' : ''}`}>
            <div className="header-container">
                <header onClick={() => setExpanded(!expanded)}>
                    <h3 className="position-title"><em>{positionTitle}</em></h3>
                    <h4 className="timeframe">{timeframe}</h4>
                    <h4 className="location">{location}</h4>
                </header>
                <div className="drop-down-icon">
                    <i className={`fa-solid fa-angle-${!expanded? 'up' : 'down'}`}></i>
                </div>
            </div>
            <div className="position-description">
                <ul className="position-description-list">
                    {description && description.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
                {skillsUsed && <div className="skills-used">
                    <header>
                        <h4> - Skills Used</h4>
                    </header>
                    <p className="position-skills-used-list">
                        {skillsUsed.join(' • ')}
                    </p>
                </div>}
            </div>
        </div>
    )
}