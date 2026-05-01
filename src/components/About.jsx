import { number, label, string } from "prop-types";
import { FaGraduationCap } from "react-icons/fa";

const aboutItems = [
  //   {
  //     label: "Project done",
  //     number: 2,
  //   },
  {
    string: "Mapúa University Makati",
    degree: "Bachelor of Science in Computer Science",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">About Me</h2>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Hey there! I&apos;m Alezandro Gian V. Mapalad, an aspiring
            full-stack and software developer focused on creating efficient,
            user-friendly web applications. I combine creativity with technical
            expertise to turn ideas into reliable, high-performing digital
            solutions.
            <br />
            <br />
            My journey into web development began during my studies at Mapúa
            University, where I built a strong foundation in programming,
            problem-solving, and software development principles. Through
            academic projects and hands-on experience, I’ve developed my skills
            in modern technologies and continue to push myself to learn,
            improve, and create meaningful digital solutions.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {aboutItems.map(({ label, number, string, degree }, key) => (
              <div key={key}>
                {number ? (
                  <div className="flex items-center md:mb-8 md:p-12 md:max-w-[60ch]">
                    <span className="text-sm font-semibold md:text-base">
                      {number}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 mb-4 md:max-w-[60ch]">
                    <FaGraduationCap className="w-5 h-5 gap-4 md:w-5 md:h-5 text-zinc-300 mt-0.5" />

                    <div>
                      <span className="text-md font-semibold md:text-lg text-zinc-300 block">
                        {string}
                      </span>
                      <span className="text-sm md:text-md text-zinc-400">
                        {degree}
                        <p>(2022 - Present)</p>
                      </span>
                    </div>
                  </div>
                )}

                {/* <p className="text-sm text-zinc-400">{label}</p> */}
              </div>
            ))}
            <img
              src="/assets/letter-z.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
