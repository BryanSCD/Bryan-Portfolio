import { StackProps, SystemProps, VStack } from "@chakra-ui/react";
import { Page } from "../../components";
import { ProjectsComponent, ProjectsProps } from "./ProjectsComponent";

const projects: { [key: string]: ProjectsProps } = {
  zrmadrid: {
    title: "Zona Restringida - Madrid",
    description:
      "At the begining of COVID pandemic the Madrid's governors ordered to confine people by areas, without giving quality information to the citizens. That is the reason why I created Zona Restringida - Madrid.",
    architecture: "Client-Server",
    mainTechnologies: ["Android, ", "JAVA"],
    logoSrc: "./logo_zrmadrid.png",
    screenSrc: "./screen_zrmadrid.png",
  },
  wcourier: {
    title: "WCourier",
    description:
      "Nowadays everything needs to be automated. WCourier is a tool (bot) that would help companies to send messages via Whatsapp automatically. Messages are queued and sent in the background.",
    architecture: "TCP",
    mainTechnologies: ["CSharp, ", "WinForms"],
    logoSrc: "./logo_wcourier.png",
    screenSrc: "./screen_wcourier.png",
  },
};

export interface ProjectsPageProps extends StackProps {
  separatorColor: SystemProps["color"];
}

export function ProjectsPage({ separatorColor, ...rest }: ProjectsPageProps) {
  return (
    <Page
      separator='Projects'
      separatorColor={separatorColor}
      separatorCloud='./main_projects/cloud.png'
      separatorCloudsBackground='./main_projects/clouds_background.png'
      {...rest}
    >
      <VStack spacing='2'>
        <ProjectsComponent
          imageLocation='right'
          imageOrientation='vertical'
          bgHexColor='#5216D7'
          alignSelf='start'
          {...projects.zrmadrid}
        />
        <ProjectsComponent
          imageLocation='left'
          imageOrientation='horizontal'
          bgHexColor='#01675B'
          colorScheme='green'
          alignSelf='end'
          {...projects.wcourier}
        />
      </VStack>
    </Page>
  );
}
