import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import { Box, Link, ListItem, Text, ThemeTypings, UnorderedList } from '@chakra-ui/react';

export type ImageOrientation = 'vertical' | 'horizontal';

export interface ProjectsProps {
  title: string;
  description: ReactJSXElement;
  architecture: string;
  mainTechnologies: string[];
  platform: string;
  logoSrc: string;
  screenSrc: string;
  screenSrcOrientation: ImageOrientation;
  mainHexColor: string;
  colorScheme: ThemeTypings['colorSchemes'];
  githubURL?: string;
  figmaURL?: string;
  videoURL?: string;
  websiteURL?: string;
  showMe?: boolean;
}

export const projects: ProjectsProps[] = [
  {
    title: 'Zona Restringida - Madrid',
    description: (
      <Text width='100%' fontSize='md'>
        {
          "At the begining of COVID pandemic the Madrid's governors ordered to confine people by areas, without giving quality information to the citizens. That is the reason why I created Zona Restringida - Madrid."
        }
      </Text>
    ),
    architecture: 'Client-Server',
    mainTechnologies: [
      'Android Studio',
      'JAVA',
      'Adobe Photoshop (design)',
      'Adobe After Effects (video edition)',
    ],
    platform: 'Android',
    logoSrc: './main_projects/zrmadrid_logo.png',
    screenSrc: './main_projects/zrmadrid_screenshot.gif',
    screenSrcOrientation: 'vertical',
    videoURL: 'https://www.youtube.com/watch?v=v4A88dVV1UA',
    websiteURL: 'https://sites.google.com/view/zonarestringidamadrid/',
    mainHexColor: '#5216D7',
    colorScheme: 'purple',
  },
  {
    title: 'WCourier',
    description: (
      <Text fontSize='md'>
        Nowadays everything needs to be automated. WCourier is a tool (bot) that would help
        companies to send messages via Whatsapp automatically. Messages are queued and sent in the
        background.
      </Text>
    ),
    architecture: 'TCP',
    mainTechnologies: ['C#', 'CefSharp', 'WinForms', 'JavaScript'],
    platform: 'Windows',
    logoSrc: './main_projects/wcourier_logo.png',
    screenSrc: './main_projects/wcourier_screenshot.gif',
    screenSrcOrientation: 'horizontal',
    mainHexColor: '#01675B',
    colorScheme: 'green',
  },
  {
    title: 'This portfolio',
    description: (
      <>
        <Text width='100%' fontSize='md'>
          Made from scratch. Unique.
        </Text>
        <Box bgColor='blackAlpha.200' p='2' mt='2' fontSize='sm'>
          <Text width='100%'>
            <strong>Acknowledgements:</strong>
          </Text>

          <UnorderedList>
            <ListItem>
              <Text>
                <strong>Clouds textures:</strong>
              </Text>
              <Link href='https://resourceboy.com/textures/cloud-textures/' isExternal>
                https://resourceboy.com/
              </Link>
            </ListItem>
            <ListItem>
              <Text>
                <strong>Madrid Landscape:</strong>
              </Text>
              <Link href='https://resourceboy.com/textures/cloud-textures/' isExternal>
                https://www.instagram.com/jaime_mad01/
              </Link>{' '}
            </ListItem>
          </UnorderedList>
        </Box>
      </>
    ),
    architecture: 'MVC',
    mainTechnologies: [
      'React',
      'Typescript',
      'Figma',
      'ChakraUI',
      'Firebase',
      'FramerMotion',
      'ReadyMePlayer',
    ],
    platform: 'Web',
    logoSrc: './main_projects/bcv_logo.png',
    screenSrc: './main_projects/bcv_screenshot.gif',
    screenSrcOrientation: 'horizontal',
    mainHexColor: '#665cb2',
    colorScheme: 'purple',
    figmaURL:
      'https://www.figma.com/file/PaY3WT9sDKJBrmmyZU3B6d/Bryan-Website?node-id=2102%3A2110&t=FUloXkdhJZ1CvIsG-1',
    githubURL: 'https://github.com/BryanSCD/Bryan-Portfolio',
  },
];
