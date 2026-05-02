import { ButtonPrimary } from "./Button";
import { BackgroundLines } from "./ui/background-lines";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/zmpld",
  },
  {
    label: "LinkedIn",
    href: "www.linkedin.com/in/alezandro-gian-mapalad-6713273b9",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zmpld_/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/alezandrogian.mapalad",
  },
];

const Footer = () => {
  return (
    <footer className="section pb-0">
      <BackgroundLines className="h-auto min-h-[24rem] rounded-t-3xl border-t border-zinc-800/60">
        <div className="container py-14">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                Let&apos;s work together today!
              </h2>
              <ButtonPrimary
                href="mailto:alezandromapalad@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 
                    transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 reveal-up">Socials</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 
                    transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-10">
            <a href="/" className="logo reveal-up">
              <img
                src="/assets/letter-z.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </a>

            <p className="text-zinc-500 text-sm reveal-up">
              &copy; 2026{" "}
              <span className="text-zinc-200">zmpld_ All rights reserved.</span>
            </p>
          </div>
        </div>
      </BackgroundLines>
    </footer>
  );
};

export default Footer;
