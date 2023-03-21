import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { IoBookSharp, IoDesktopSharp } from 'react-icons/io5';

import { Button } from '@chakra-ui/react';

export interface ExperienceProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  logo: string;
  footer?: ReactJSXElement;
}

export const experience: ExperienceProps[] = [
  {
    title: 'Back-end Developer in SCRUM Project',
    subtitle: 'Sep 2022 - Dec 2022 · 4 mos',
    description:
      "As a Back-end developer, my role was to contribute to the project's objective of revolutionizing the vehicle purchasing process by addressing a significant technological challenge.",
    skills: ['Database Design', 'Back-End Web Development'],
    logo: './experience/tsm_logo.png',
    footer: (
      <Button
        as='a'
        bgColor='gray.300'
        color='black'
        colorScheme='gray'
        href='./experience/mercedes_paper.pdf'
        leftIcon={<IoBookSharp />}
        m='1'
        size='md'
        target='_blank'
        variant='solid'
      >
        Learn more!
      </Button>
    ),
  },
  {
    title: 'IT Consulting & Architect',
    subtitle: 'Sep 2020 - Aug 2022 · 2 yrs',
    description:
      'As an IT Consultant & Architect, my role was to assist InterImage in improving their technology systems and processes to make them more efficient.',
    skills: [
      'IT consulting',
      'Software Architect',
      'Software Development',
      'Database Design',
      'Full-Stack Development',
    ],
    logo: './experience/interimage_logo.png',
    footer: (
      <Button
        as='a'
        colorScheme='purple'
        href='https://interimage.es/'
        leftIcon={<IoDesktopSharp />}
        m='1'
        rel='external'
        size='md'
        target='_blank'
        variant='solid'
      >
        Company website
      </Button>
    ),
  },
];
