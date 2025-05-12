export default function ProjectArticleSection({ image, title, paragraph }) {
    return (
        <section className="project-article-section">
            <header>
                <div className="img-wrapper">
                    <img src={image} alt="project image" />
                </div>
                <h2>{title}</h2>
            </header>
            <div className="content">
                <p>{paragraph}</p>
            </div>
        </section>
    )
}