import { BoxProps, Heading, Skeleton, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Layer } from '../Layer';
import { ScrollDownIcon } from './ScrollDownIcon';

export type TouchLayerProps = {
  showIcons: boolean;
} & BoxProps;

export const TouchLayer = forwardRef<TouchLayerProps, 'div'>(({ showIcons, ...rest }, ref) => {
  return (
    <Layer ref={ref} {...rest} alignItems='center' display='flex' justifyContent='center'>
      <Skeleton
        endColor='blue.800'
        height='100%'
        roundedTop='full'
        startColor='gray.400'
        width={['100%', '80%', '60%', '40%']}
      />
      <Heading color='whiteAlpha.500' position='absolute' size='lg'>
        {"Loading Bryan's avatar..."}
      </Heading>
      {showIcons && <ScrollDownIcon />}
    </Layer>
  );
});
