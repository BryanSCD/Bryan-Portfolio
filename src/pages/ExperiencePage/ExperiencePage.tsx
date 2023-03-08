import { StackProps, SystemProps } from "@chakra-ui/react";
import { Page } from "../../components";
import {
  ExperienceTimelineComponent,
  ExperienceTimelineProps,
} from "./ExperienceTimelineComponent";

const experience: ExperienceTimelineProps[] = [
  {
    title: "Back-end Developer in SCRUM Project",
    subtitle: "Sep 2022 - Dec 2022 · 4 mos",
    description:
      "As a Back-end developer, my role was to contribute to the project's objective of revolutionizing the vehicle purchasing process by addressing a significant technological challenge.",
    skills: ["Database Design", "Back-End Web Development"],
    logo: "./logo_tum.png",
  },
  {
    title: "IT Consulting & Architect",
    subtitle: "Sep 2020 - Sep 2022 · 2 yrs 1 mo",
    description:
      "As an IT Consultant & Architect, my role was to assist InterImage in improving their technology systems and processes to make them more efficient.",
    skills: [
      "IT consulting",
      "Software Architect",
      "Software Development",
      "Database Design",
      "Full-Stack Development",
    ],
    logo: "./logo_interimage.png",
  },
];

export interface ExperiencePageProps extends StackProps {
  separatorColor: SystemProps["color"];
}

export function ExperiencePage({
  separatorColor,
  ...rest
}: ExperiencePageProps) {
  return (
    <Page
      separator='Experience Page'
      separatorSpacing='-40'
      separatorColor={separatorColor}
      {...rest}
    >
      {experience.map((value, index) => {
        if (index == 0) {
          return (
            <ExperienceTimelineComponent
              {...value}
              key={index}
              extraUpperDivider={{ variant: "dashed" }}
              upperDivider={{ variant: "dashed" }}
            />
          );
        } else if (index == experience.length - 1) {
          return (
            <ExperienceTimelineComponent
              {...value}
              key={index}
              bottomDivider={{ variant: "dashed" }}
              extraBottomDivider={{ variant: "dashed" }}
            />
          );
        } else {
          return <ExperienceTimelineComponent {...value} key={index} />;
        }
      })}
    </Page>
  );
}
