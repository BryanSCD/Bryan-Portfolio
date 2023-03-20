import { MotionValue, motion } from 'framer-motion';

import { Heading, StackProps, SystemProps, VStack, forwardRef } from '@chakra-ui/react';

export type CloudsComponentProps = {
  separatorLabel: string;
  separatorCloud: string;
  separatorColor: SystemProps['color'];
  showSeparatorCloudsBackground?: boolean;
  separatorCloudsBackgroundSrc?: string;
  translateXCloud?: string | MotionValue;
  translateXHeading?: string | MotionValue;
} & StackProps;

export const CloudsComponent = forwardRef<CloudsComponentProps, 'div'>(
  (
    {
      separatorLabel,
      separatorCloud,
      separatorColor,
      showSeparatorCloudsBackground = false,
      separatorCloudsBackgroundSrc,
      translateXCloud = '0',
      translateXHeading = '0',
      ...rest
    },
    ref,
  ) => {
    return (
      <VStack ref={ref} height='80' overflow='hidden' position='relative' width='100%' {...rest}>
        {/* Main cloud */}
        <motion.img
          alt='Main cloud'
          src={separatorCloud}
          style={{
            x: translateXCloud,
            position: 'absolute',
            width: 'auto',
            height: '100%',
            minWidth: '64rem',
            minHeight: '20rem',
            objectFit: 'cover',
          }}
        />

        {/* Heading label  */}
        <motion.div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            x: translateXHeading,
            position: 'absolute',
          }}
        >
          <Heading
            as={motion.h1}
            color={separatorColor}
            display='inline-block'
            fontSize='6xl'
            textAlign='center'
          >
            {separatorLabel}
          </Heading>
        </motion.div>

        {/* Background cloud separator */}
        {showSeparatorCloudsBackground && (
          <motion.img
            alt='cloud separator background'
            src={separatorCloudsBackgroundSrc}
            style={{
              x: translateXCloud,
              position: 'absolute',
              width: 'auto',
              height: '100%',
              minWidth: '128rem',
              minHeight: '20rem',
              opacity: '0.3',
              objectFit: 'cover',
            }}
          />
        )}
      </VStack>
    );
  },
);
