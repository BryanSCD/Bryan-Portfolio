import { motion } from 'framer-motion';

import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

export const Layer = forwardRef<BoxProps, 'div'>(({ children, ...rest }, ref) => {
  return (
    <Box
      ref={ref}
      as={motion.div}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});
