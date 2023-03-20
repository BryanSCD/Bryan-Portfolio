import { MotionValue, motion } from 'framer-motion';

import { Heading, Image, SystemProps, VStack, forwardRef } from '@chakra-ui/react';

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
        {separatorCloudsBackground && (
          <motion.div
            style={{
              x: translateXCloud,
              position: 'absolute',
              zIndex: 40,
              margin: 0,
              width: '128rem',
              height: '20rem',
            }}
          >
            <Image
              alt='cloud separator background'
              as={motion.img}
              height='100%'
              objectFit='fill'
              opacity='0.3'
              src={separatorCloudsBackground}
              width='100%'
            />
          </motion.div>
        )}

        <motion.div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            x: translateXHeading,
            position: 'absolute',
            zIndex: 30,
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
        <motion.div
          style={{
            x: translateXCloud,
            position: 'absolute',
            zIndex: 20,
            margin: 0,
            width: '64rem',
            height: '20rem',
          }}
        >
          <Image
            alt='cloud separator'
            as={motion.img}
            height='100%'
            objectFit='fill'
            src={separatorCloud}
            width='100%'
          />
        </motion.div>
      </VStack>
    );
  },
);
