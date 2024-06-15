import styles from './ProjectsStyles.module.css';
import icon from '../../assets/icon.png'
import heores from '../../assets/heores.png';
import calendar from '../../assets/calendar.png';

import journal from '../../assets/journal.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={icon}
          link="https://santiagopip.github.io/hooksRepository/"
          h3="hooks"
          p="Hooks app"
        />
        <ProjectCard
          src={heores}
          link="https://santiagopip.github.io/heroes-app/"
          h3="heroes App"
          p="heroes"
        />
        <ProjectCard
          src={calendar}
          link="https://github.com/SantiagoPip/CalendarAppReact"
          h3="Calendar App"
          p="Calendar"
        />
        <ProjectCard
          src={journal}
          link="https://github.com/SantiagoPip/JournalAppReact"
          h3="Journal App"
          p="Journal App"
        />
      </div>
    </section>
  );
}

export default Projects;
