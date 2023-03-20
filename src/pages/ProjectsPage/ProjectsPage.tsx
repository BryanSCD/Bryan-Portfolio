import { SystemProps, VStack, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Page, PageProps } from '../../components';
import { projects } from './Projects';
import { ProjectsComponent } from './ProjectsComponent';

export type ProjectsPageProps = {
  separatorColor: SystemProps['color'];
} & PageProps;

export const ProjectsPage = forwardRef<ProjectsPageProps, 'div'>(
  ({ separatorColor, ...rest }, ref) => {
    const isMedium = useBreakpointValue(
      {
        base: true,
        lg: false,
      },
      { ssr: false },
    );
    return (
      <Page
        ref={ref}
        separatorProps={{
          separatorLabel: 'Projects',
          separatorCloud: './main_projects/cloud.png',
          separatorCloudsBackgroundSrc: './main_projects/clouds_background.png',
          separatorColor,
        }}
        {...rest}
      >
        <VStack spacing='20'>
          {projects.map((element, index) => {
            return (
              <ProjectsComponent
                maxW='100%'
                key={element.title}
                imageLocation={index % 2 == 0 ? 'right' : 'left'}
                alignSelf={isMedium ? 'center' : index % 2 == 0 ? 'right' : 'left'}
                {...element}
              />
            );
          })}
        </VStack>
      </Page>
    );
  },
);
