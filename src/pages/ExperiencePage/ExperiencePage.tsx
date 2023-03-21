import { SystemProps, VStack, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Page, PageProps } from '../../components';
import { experience } from './Experience';
import { ExperienceTimelineComponent } from './ExperienceTimelineComponent';

export type ExperiencePageProps = {
  separatorColor: SystemProps['color'];
} & PageProps;

export const ExperiencePage = forwardRef<ExperiencePageProps, 'div'>(
  ({ separatorColor, ...rest }, ref) => {
    const isLarge = useBreakpointValue({ base: true, xl: false }, { ssr: false });
    return (
      <Page
        ref={ref}
        childrenSeparatorSpacing={isLarge ? '8' : '-40'}
        separatorProps={{
          separatorLabel: 'Experience',
          separatorColor,
          separatorCloud: './experience/ufo.png',
          showSeparatorCloudsBackground: false,
          translateXCloud: '0',
          translateXHeading: '0',
        }}
        {...rest}
      >
        <VStack spacing={isLarge ? '20' : '0'}>
          {experience.map((value, index) => {
            if (index == 0) {
              return (
                <ExperienceTimelineComponent
                  {...value}
                  key={index}
                  extraUpperDivider={{ variant: 'dashed' }}
                  upperDivider={{ variant: 'dashed' }}
                />
              );
            } else if (index == experience.length - 1) {
              return (
                <ExperienceTimelineComponent
                  {...value}
                  key={index}
                  bottomDivider={{ variant: 'dashed' }}
                  extraBottomDivider={{ variant: 'dashed' }}
                />
              );
            } else {
              return <ExperienceTimelineComponent {...value} key={index} />;
            }
          })}
        </VStack>
      </Page>
    );
  },
);
