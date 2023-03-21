import { Box, BoxProps, Flex, Heading, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import './ScrollDownIcon.css';

export const ScrollDownIcon = forwardRef<BoxProps, 'div'>(({ ...rest }, ref) => {
  const isMedium = useBreakpointValue({ base: true, lg: false }, { ssr: false });

  return (
    <Box
      ref={ref}
      alignItems='center'
      bottom={isMedium ? 'auto' : '10rem'}
      justifyContent='center'
      position='absolute'
      right={isMedium ? '4' : 'auto'}
      top={isMedium ? '4' : 'auto'}
      {...rest}
    >
      <Heading className='scrollheading' color='white' m={0} p={0} size='md'>
        Scroll Down
      </Heading>
      <Flex height='100%' justifyContent='center' position='absolute' width='100%'>
        <Box className='chevron' />
        <Box className='chevron' />
        <Box className='chevron' />
      </Flex>
    </Box>
  );
});
