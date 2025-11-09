import "./Slider.css";
import cemSc from "../assets/CEMcs.png";
import neonSC from "../assets/NEON808sc.png";
import { useState } from "react";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
const projects = [
  {
    key: "neon",
    title: "NEON808",
    img: neonSC,
    siteUrl: "https://gigijuliette.github.io/wcs-project1/",
    repoUrl: "https://github.com/GigiJuliette/wcs-project1",
    description:
      "Création en équipe d’un site web interactif pour le label fictif NEON808, réalisé en HTML, CSS et JavaScript.",
  },
  {
    key: "cem",
    title: "CEM Instrumentations",
    img: cemSc,
    siteUrl: "https://www.cem-instrumentations.com/",
    repoUrl: "https://github.com/GigiJuliette/cem-instrumentations",
    description:
      "Développement et déploiement d’un site vitrine en HTML, CSS et JavaScript, hébergé sur Vercel.",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const toNext = () => {
    setIndex((index + 1) % projects.length);
  };
  const toPrev = () => {
    index === 0
      ? setIndex(projects.length - 1)
      : setIndex((index - 1) % projects.length);
  };

  const current = projects[index];
  return (
    <>
      <div className="retroUi project-container" key={current.i}>
        <img src={current.img} alt={current.title} className="retroUi" />
        <span className="projectTitle">{current.title}</span>
        <span className="projectDes">{current.description}</span>
        <a className="retroUi firstBtn" href={current.siteUrl} target="_blank">
          Visit website
        </a>
        <a className="retroUi secondBtn" href={current.repoUrl} target="_blank">
          See repo
        </a>
        <img
          onClick={toPrev}
          src={arrowLeft}
          className="arrows arrow-left hover"
        />
        <img
          onClick={toNext}
          src={arrowRight}
          className="arrows arrow-right hover"
        />
      </div>
    </>
  );
}
export default Slider;
