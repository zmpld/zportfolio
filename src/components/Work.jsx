import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/assets/projects/project1.png",
    title: "Vintage Vault",
    tags: ["eCommerce", "Development"],
    projectLink: "https://vintagevault-zmapalad.vercel.app/",
  },
  {
    imgSrc: "/assets/projects/project3.png",
    title: "AGM Computer Solutions",
    tags: ["Business Website", "Development"],
    projectLink: "https://zmpld.github.io/agmcomputer.github.io/",
  },
  {
    imgSrc: "/assets/projects/project2.jpg",
    title: "MotoParts Manager",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/zmpld/motoparts",
  },
];

const Work = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects Handled</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
