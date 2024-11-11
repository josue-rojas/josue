import { AccomplishmentSlide } from "../components/AccomplishmentSlide";
import { AlignmentSlide } from "../components/AlignmentSlide ";
import { ClosingSlide } from "../components/ClosingSlide";
import { HighlightSlide } from "../components/HighlightSlide";
import { IconAdaptable } from "../components/IconAdaptable";
import { IconDeploy } from "../components/IconDeploy";
import { IconFree } from "../components/IconFree";
import { IconLeader } from "../components/IconLeader";
import { IntroSlide } from "../components/IntroSlide";
import { VectorBird } from "../components/VectorBirds";
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
        highlights: ["JavaScript", "React.js", "HTML", "CSS", "NextJS"]
      },
      {
        title: "Back End Technologies",
        highlights: ["NodeJS", "PostgreSQL", "MongoDB", "Firebase"]
      },
      {
        title: "Cloud Technologies",
        highlights: ["Google Cloud", "AWS", "Vercel", "Azure"]
      },
      {
        title: "Tools",
        highlights: ["Git", "Github", "Datadog", "Webpack"]
      },
      {
        title: "Other Attributes",
        highlights: ["Fast Learner", "Adaptable", "Growth Mindset"]
      },
      {
        title: "Hobbies",
        highlights: ["Coding", "Photography", "Planning"]
      },
    ]} />
    <AccomplishmentSlide title={"Accomplishment"} bulletPoints={[
      {
        title: "Best Practice Advocate",
        description: "Advocated for use of ESLint accross MikMak's code repos leading to faster code reviews and less error prone.",
        icon: <IconDeploy />
      },
      {
        title: "Led High Impact Project",
        description: "Created a pipeline for handling large datasets using OOP leading to faster integrations.",
        icon: <IconLeader />
      },
      {
        title: "Freelance Work",
        description: "Worked with local tour companies to build and grow audience through SEO and Accessibility best practice leading to a growth of 10 times higher impressions.",
        icon: <IconFree />
      },
      {
        title: "Adaptable",
        description: "Conducted audit, rotation, and migration of exposed secrets in newly acquired repos that consited of different languages such as Go and C#.",
        icon: <IconAdaptable />
      },
    ]}/>
    <AlignmentSlide title={"Alignment"} features={[
      {
        title: 'Mission',
        description: "I am looking to work for a positive mission company. I also love the mission of bringing different perspectives and awereness to how we expliore the city.",
        image: <VectorBird width={3200} height={300} />
      },
      {
        title: 'Technology',
        description: "I have experience with technologies mentioned. If there is something I dont know I am very adaptable and a quick learner.",
        image: <VectorBird width={300} height={300} />
      },
      {
        title: 'Career Goals',
        description: "I enjoy working with complex engineering problems. A challenge is what I see as growth and I enjoy that.",
        image: <VectorBird width={300} height={300} />

      }
    ]} />
    <VisionSlide title={"Thank You!"} description={"Software Engineer"}/>
    {/* <ClosingSlide title={"Thank You!"} description={"Software Engineer"}/> */}
  </div>
}
