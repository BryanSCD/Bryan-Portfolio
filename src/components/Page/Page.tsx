import {
  Box,
  Flex,
  Heading,
  Image,
  StackProps,
  SystemProps,
  VStack,
} from "@chakra-ui/react";

import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export interface PageProps extends StackProps {
  childrenPaddingX?: SystemProps["padding"];
  childrenPaddingY?: SystemProps["padding"];
  separator?: string;
  separatorCloud?: string;
  separatorCloudsBackground?: string;
  separatorColor?: SystemProps["color"];
  separatorSpacing?: SystemProps["margin"];
}

export function Page({
  children,
  childrenPaddingX = "28",
  childrenPaddingY = "20",
  separator,
  separatorCloud,
  separatorCloudsBackground,
  separatorColor = "black",
  separatorSpacing = "0",
  ...rest
}: PageProps) {
  const separatorRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: separatorRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateXCloud = useTransform(
    smoothScrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  const translateXHeading = useTransform(
    smoothScrollYProgress,
    [0, 1],
    ["-30%", "30%"]
  );

  return (
    <VStack
      {...rest}
      justify='flex-start'
      align='flex-start'
      alignSelf='stretch'
      spacing={separatorSpacing}
    >
      {separator && (
        <VStack
          width='100%'
          height='80'
          position='relative'
          overflow='hidden'
          ref={separatorRef}
        >
          <Image
            as={motion.img}
            src={separatorCloudsBackground}
            alt='cloud separator cover'
            position='absolute'
            opacity='0.3'
            style={{ x: translateXCloud }}
            zIndex={40}
            width='2048px'
            height='320px'
          />
          <Flex as={motion.div} justify='center' align='center' height='100%'>
            <Heading
              as={motion.h1}
              fontSize='6xl'
              color={separatorColor}
              textAlign='center'
              display='inline-block'
              zIndex={30}
              position='absolute'
              style={{ x: translateXHeading }}
            >
              {separator}
            </Heading>
          </Flex>
          <Image
            as={motion.img}
            src={separatorCloud}
            alt='cloud separator'
            width='1024px'
            height='320px'
            objectFit='fill'
            zIndex={20}
            position='absolute'
            style={{ x: translateXCloud }}
          />
        </VStack>
      )}
      <Box
        paddingX={childrenPaddingX}
        paddingY={childrenPaddingY}
        overflow='hidden'
        width='100%'
      >
        {children}
      </Box>
    </VStack>
  );
}
