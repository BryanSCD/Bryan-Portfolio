import { MotionValue, motion } from 'framer-motion';

import { Heading, SystemProps, VStack, forwardRef } from '@chakra-ui/react';

export type CloudsComponentProps = {
  separatorLabel: string;
  separatorCloud: string;
  separatorColor: SystemProps['color'];
  separatorCloudsBackground?: string;
};

export type TranslateCloudsComponentProps = {
  translateXCloud?: string | MotionValue;
  translateXHeading?: string | MotionValue;
} & CloudsComponentProps;

export const CloudsComponent = forwardRef<TranslateCloudsComponentProps, 'div'>(
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
            margin: 0,
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
            margin: 0,
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
              margin: 0,
              width: 'auto',
              height: '100%',
              opacity: '0.3',
              // zIndex: 30,
            }}
          />
        )}
      </VStack>
    );
  },
);
