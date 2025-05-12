import { useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ProjectArticle from "./Components/Projects/ProjectArticles/ProjectArticle";
import { evolaterArticle, exampleArticle, fundamentaArticle, gamesArticle, macroTrackerArticle, ptcBlocksArticle } from "./Components/Projects/ProjectArticles/project-article-data";

function App() {
    const [heroComplete, setHeroComplete] = useState(false);
    const [aboutComplete, setAboutComplete] = useState(false);
    const [experienceComplete, setExperienceComplete] = useState(false);

    const [activeArticle, setActiveArticle] = useState(null);

    /* If a user desires to navigate to a section of the page,
     change the state of animations so the user can access it. */
    function onNavSelected() {
        setHeroComplete(true);
        setAboutComplete(true);
        setExperienceComplete(true);
    }

    const articles = [ptcBlocksArticle, fundamentaArticle, macroTrackerArticle, evolaterArticle, gamesArticle];

    return (
        <>
            <Header navSelected={onNavSelected}/>
            <main>
                {articles.map((article, index) => 
                    <ProjectArticle
                        active={index === activeArticle}
                        display={heroComplete}
                        sections={article.sections} 
                        title={article.title}
                        timeframe={article.timeframe}
                        onDeSelect={() => setActiveArticle()} 
                        key={index + 'project-article'} />
                )}

                <div>
                    {/* Hero Section */}
                    <Hero onAnimationComplete={() => setHeroComplete(true)} />
                    {/* About Section */}
                    {heroComplete? <About
                        onAnimationComplete={() => setAboutComplete(true)}
                    /> : null}
                    {/* Experience Section */}
                    {aboutComplete? <Experience
                        onAnimationComplete={() => setExperienceComplete(true)}
                    /> : null}
                    {/* Projects Section */}
                    {experienceComplete? <Projects setActiveArticle={setActiveArticle} /> : null}
                </div>
            </main>
        </>
    );
}

export default App;