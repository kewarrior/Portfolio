import { palavras } from "../constantes";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 ">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Esquerda: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transformação
                <span className="slide">
                  <span className="wrapper">
                    {palavras.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>em Projetos Reais</h1>
              <h1>que Produzem resultados.</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Olá, sou o João Pinho, um desenvolvedor de Portugal no início de
              carreira, com vontade de aprender todos os dias.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Trabalhos"
            />
          </div>
        </header>
        {/* Direita: 3D Modelo */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
