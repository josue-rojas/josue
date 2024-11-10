import { AccomplishmentSlide } from "../components/AccomplishmentSlide";
import { AlignmentSlide } from "../components/AlignmentSlide ";
import { ClosingSlide } from "../components/ClosingSlide";
import { HighlightSlide } from "../components/HighlightSlide";
import { IntroSlide } from "../components/IntroSlide";
import { VisionSlide } from "../components/VisionSlide";
import styles from './styles.module.css';


export function Home() {

  return <div id='home' className={styles.home}>
    <IntroSlide
      title={"Josue Rojas"}
      attributes={[
        "Full Stack Software Engineer",
        "4+ Years of Experience",
        "Experience with Large Scale and Startups",
        "Current Obsessions: Photography, Diners, and Frames"
      ]} />
    <HighlightSlide title={"Highlights"} highlights={[
      {
        title: "Front End Technologies",
        highlights: ["JavaScript", "React.js"]
      },
      {
        title: "Back End Technologies",
        highlights: ["NodeJS", "PostgreSQL", "Firebase"]
      },
      {
        title: "Cloud Technologies",
        highlights: ["AWS", "GCP", "Azure"]
      },
    ]} />
    <AccomplishmentSlide title={"Accomplishment"} description={"Software Engineer"}/>
    <AlignmentSlide title={"Alignment"} description={"Software Engineer"}/>
    <VisionSlide title={"Vision"} description={"Software Engineer"}/>
    <ClosingSlide title={"Closing"} description={"Software Engineer"}/>
  </div>
}
