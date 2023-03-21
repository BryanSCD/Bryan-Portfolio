import { Box, BoxProps, Flex, Heading, forwardRef } from '@chakra-ui/react';

import './ScrollDownIcon.css';

export const ScrollDownIcon = forwardRef<BoxProps, 'div'>(({ ...rest }, ref) => {
  return (
    <Box ref={ref} alignItems='center' justifyContent='center' {...rest}>
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
