import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/navabar";
import TypingHero from "./Components/TypingHero/TypingHero";
import SectionHeader from "./Components/SectionHeader/SectionHeader";
import Reveal from "./Components/Reveal/Reveal";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import ExperienceGallery from "./Components/ExpCarousel/experience";
import Cert from "./Components/CertPage/cert";
import Footer from "./Components/Footer/Footer";
import projects from "./data/projects";
// TODO(blog): re-enable with the blog section below
// import Bloghome from "./Components/BlogHome/bloghome";

// The original 2023 version of this page is kept in App.legacy.js.

const videos = [
  {
    id: "LHsnPNAR3dc",
    title: "Google Developer Student Lead",
    description:
      "In this video I introduced myself and discussed my goals and ambitions as a GDSC lead.",
  },
  {
    id: "34-cJyWhsbU",
    title: "Best EDR Solutions",
    description:
      "This quick presentation gives an overview of two great EDR solutions.",
  },
  {
    id: "eIjuVYvFDWc",
    title: "101 Checkout CRM Software",
    description:
      "In this video I discussed some of the latest features of 101 Checkout.",
  },
];

function App() {
  const navigate = useNavigate();

  return (
    <div className="font-body text-zinc-900 bg-white">
      <Navbar />

      {/* Hero: typed headline */}
      <TypingHero />

      {/* Intro */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 pt-28 pb-24 flex flex-wrap gap-x-20 gap-y-12">
          <Reveal className="flex-[1_1_340px]">
            <h2 className="font-display font-semibold text-[clamp(34px,4vw,56px)] leading-[1.08] tracking-[-0.025em]">
              Aminat Usman is an Innovator <span className="text-accent">+</span>{" "}
              Creator.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex-[1_1_520px] min-w-0">
            <div className="flex flex-col gap-5 text-[19px] leading-[1.7] text-zinc-700">
              <p>
                Innovator, creator, and software engineer dedicated to turning
                ideas into reality. With a passion for building secure and
                impactful technologies, I've collaborated with leading
                engineering teams to design solutions that enhance safety and
                efficiency. My work has been recognized with the Most
                Outstanding Student Award.
              </p>
              <p>
                Beyond coding, I am well-grounded in application security,
                focusing on crafting solutions that simplify and secure the
                engineering process. Together, we can shape the future of
                technology. Let's connect and ignite transformation.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="min-h-[48px] px-7 rounded-full bg-black text-white font-semibold text-base transition hover:bg-accent"
                >
                  Contact Me
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="min-h-[48px] px-7 rounded-full border border-zinc-300 font-semibold text-base transition hover:border-zinc-900"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience photo carousel */}
      <ExperienceGallery />

      {/* Blog section   */}
      {/* TODO(blog): hidden until blog data is restored
<div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
            <div className="my-16">
              <h1 className=" font-bold text-2xl lg:text-4xl text-center font-smalltech py-4  md:mt-20 border-y">
                LEARN SOMETHING NEW
              </h1>
            </div>

              <Bloghome/>

            <div className="flex justify-center my-10">
              <div className="flex justify-center mt-10">
                <ButtonBox text="Visit Blog Page" />
              </div>
            </div>
          </div>
          */}

      {/* Projects */}
      <section id="projects">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <Reveal>
            <SectionHeader
              eyebrow="PROJECTS"
              title="Creativity at its peak"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 100} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="min-h-[48px] px-6 rounded-full border border-zinc-300 font-semibold text-base transition hover:border-zinc-900"
            >
              See All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-cream">
        <div className="max-w-[1240px] mx-auto px-6 py-24">
          <Reveal>
            <SectionHeader eyebrow="VIDEOS" title="On my channel" className="mb-12" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <Reveal key={video.id} delay={i * 100}>
                <div className="flex flex-col gap-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-display font-semibold text-[21px]">
                    {video.title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600">
                    {video.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="https://www.youtube.com/@user-rr1vx4vc8s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[48px] px-6 rounded-full bg-black text-white font-semibold text-base transition hover:bg-accent"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Cert />

      <Footer />
    </div>
  );
}

export default App;
