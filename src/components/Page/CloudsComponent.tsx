import { MotionValue, motion } from 'framer-motion';

import { Heading, StackProps, SystemProps, VStack, forwardRef } from '@chakra-ui/react';

export type CloudsComponentProps = {
  separatorLabel: string;
  separatorCloud: string;
  separatorColor: SystemProps['color'];
  separatorCloudsBackground?: string;
  translateXCloud?: string | MotionValue;
  translateXHeading?: string | MotionValue;
} & StackProps;

export const CloudsComponent = forwardRef<CloudsComponentProps, 'div'>(
  (
    {
      separatorLabel,
      separatorCloud,
      separatorColor,
      separatorCloudsBackground,
      translateXCloud = '0',
      translateXHeading = '0',
      ...rest
    },
    ref,
  ) => {
    return (
      <VStack ref={ref} height='80' overflow='hidden' position='relative' width='100%' {...rest}>
        <motion.img
          alt='cloud separator'
          src={separatorCloud}
          style={{
            x: translateXCloud,
            position: 'absolute',
            width: 'auto',
            height: '100%',
          }}
        />

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

        {separatorCloudsBackground && (
          <motion.img
            alt='cloud separator background'
            src={separatorCloudsBackground}
            style={{
              x: translateXCloud,
              position: 'absolute',
              width: 'auto',
              height: '100%',
              opacity: '0.3',
            }}
          />
        )}
      </VStack>
    );
  },
);
