import { AnimatePresence, Variants, motion } from 'framer-motion';

import { BoxProps, Skeleton, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Layer } from '../Layer';
import { ScrollDownIcon } from './ScrollDownIcon';

const glassAnimation: Variants = {
  visible: { height: '100%' },
  hidden: {
    height: '0%',
    transition: {
      duration: 2,
    },
  },
};

const scrollDownAnimationDesktop: Variants = {
  hidden: { y: '500%' },
  animate: {
    y: '0%',
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
};

const scrollDownAnimationMobile: Variants = {
  hidden: { x: '300%' },
  animate: {
    x: '0',
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export type TouchLayerProps = {
  showIcons: boolean;
} & BoxProps;

export const TouchLayer = forwardRef<TouchLayerProps, 'div'>(({ showIcons, ...rest }, ref) => {
  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });
  return (
    <Layer ref={ref} {...rest} alignItems='center' display='flex' justifyContent='center'>
      <AnimatePresence>
        {!showIcons && (
          <Skeleton
            alignSelf='flex-end'
            as={motion.div}
            endColor='blue.800'
            exit='hidden'
            height='100%'
            initial='visible'
            roundedTop='full'
            startColor='gray.400'
            variants={glassAnimation}
            width={['95%', '80%', '60%', '40%']}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIcons && (
          <motion.div
            animate='animate'
            initial='hidden'
            style={{
              position: 'absolute',
              bottom: isSmall ? 'auto' : '10rem',
              top: isSmall ? '1rem' : 'auto',
              right: isSmall ? '1rem' : 'auto',
            }}
            variants={isSmall ? scrollDownAnimationMobile : scrollDownAnimationDesktop}
          >
            <ScrollDownIcon as={motion.div} />
          </motion.div>
        )}
        {/* {!showIcons && (
          <Heading color='whiteAlpha.500' position='absolute' size='lg'>
            {"Loading Bryan's avatar..."}
          </Heading>
        )} */}
      </AnimatePresence>
    </Layer>
  );
});
