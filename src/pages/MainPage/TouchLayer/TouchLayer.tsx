import { BoxProps, Heading, Skeleton, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Layer } from '../Layer';
import { ScrollDownIcon } from './ScrollDownIcon';

export type TouchLayerProps = {
  showIcons: boolean;
} & BoxProps;

export const TouchLayer = forwardRef<TouchLayerProps, 'div'>(({ showIcons, ...rest }, ref) => {
  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });
  return (
    <Layer ref={ref} {...rest} alignItems='center' display='flex' justifyContent='center'>
      {!showIcons && (
        <Skeleton
          endColor='blue.800'
          height='100%'
          roundedTop='full'
          startColor='gray.400'
          width={['100%', '80%', '60%', '40%']}
        />
      )}
      {!showIcons && (
        <Heading color='whiteAlpha.500' position='absolute' size='lg'>
          {"Loading Bryan's avatar..."}
        </Heading>
      )}
      {showIcons && (
        <ScrollDownIcon
          bottom={isSmall ? 'auto' : '10rem'}
          justifyContent='center'
          position='absolute'
          right={isSmall ? '4' : 'auto'}
          top={isSmall ? '4' : 'auto'}
        />
      )}
    </Layer>
  );
});
