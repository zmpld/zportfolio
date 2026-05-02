import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/assets/tools/Figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/assets/tools/CSS3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/tools/JavaScript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/assets/tools/Node.js.svg",
    label: "NodeJS",
    desc: "Web Server",
  },

  {
    imgSrc: "/assets/tools/MySQL.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/assets/tools/Firebase.svg",
    label: "Firebase",
    desc: "Database",
  },
  {
    imgSrc: "/assets/tools/React.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/tools/Angular.svg",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/tools/TailwindCSS.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/tools/Docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/assets/tools/Git.svg",
    label: "Git",
    desc: "Version Control",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to build and learn
          modern web applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
