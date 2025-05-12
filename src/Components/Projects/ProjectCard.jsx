export default function ProjectCard({ title, imgsrc, description, onClick }) {
    return (
        <article className="project-card">
            <header>
                <h3>{title}</h3>
            </header>
            <div className="content">
                <div className="img-wrapper"><img src={imgsrc} alt="Project Thumbnail" className="thumbnail" /></div>
                <p>
                    {description}
                </p>
            </div>
            <footer>
                <p className="see-more-text link-text" onClick={onClick}>See More</p>
            </footer>
        </article>
    )
}