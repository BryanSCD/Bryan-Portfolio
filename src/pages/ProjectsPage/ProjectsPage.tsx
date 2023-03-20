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
                key={element.title}
                alignSelf={isMedium ? 'center' : index % 2 == 0 ? 'right' : 'left'}
                imageLocation={index % 2 == 0 ? 'right' : 'left'}
                maxW='100%'
                {...element}
              />
            );
          })}
        </VStack>
      </Page>
    );
  },
);
