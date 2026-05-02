import { ButtonPrimary, ButtonOutline } from "./Button";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    // <section
    //   id="home"
    //   className="min-h-screen flex items-center justify-center px-4"
    // >
    //   <div className="text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4">
    //       Welcome to My Portfolio
    //     </h1>
    //     <p className="text-lg md:text-xl text-zinc-300 mb-8">
    //       I'm a passionate developer creating amazing web experiences.
    //     </p>
    //     <a href="#projects" className="btn btn-primary">
    //       View My Work
    //     </a>
    //   </div>
    // </section>
    <section id="home">
      <AuroraBackground className="min-h-screen justify-start pt-28 lg:pt-36">
        <div
          className="container lg:grid lg:grid-cols-2 items-center 
        lg:gap-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/assets/zprofile2.jpg"
                  width={40}
                  height={40}
                  alt="Z profile picture"
                  className="img-cover"
                />
              </figure>
              <div
                className="flex items-center gap-1.5 text-zinc-400 
              text-sm tracking-wide"
              >
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span
                    className="absolute inset-0 rounded-full 
                  bg-emerald-400 animate-ping"
                  ></span>
                </span>
                Open to Internships
              </div>
            </div>
            <h2
              className="headline-1 max-w-[15ch] sm:max-w-[20ch] 
            lg:max-w[15ch] mt-5 lg:mb-10"
            >
              Turning Ideas Into Functional Web Applications
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <ButtonPrimary
                label="Download CV"
                icon="download"
                href="/assets/agvmapalad-mapua-resume.pdf"
                download="agvmapalad-mapua-resume.pdf"
              />
              <ButtonOutline
                href="#projects"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <figure
              className="w-full max-w-[320px] ml-auto
            bg-gradient-to-t from-cyan-400 via-25% via-cyan-400/40
             to-65% rounded-[60px] overflow-hidden"
            >
              <img
                src="/assets/zprofile2-no-bg.png"
                width={656}
                height={800}
                alt="Z Hero Banner"
                className="w-[20rem]"
              />
            </figure>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
