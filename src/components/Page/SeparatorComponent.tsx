import {
  Heading,
  Image,
  StackProps,
  SystemProps,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export type SeparatorComponentProps = {
  separatorLabel: string;
  separatorCloud: string;
  separatorCloudsBackground: string;
  separatorColor: SystemProps["color"];
} & StackProps;

export function SeparatorComponent({
  separatorLabel,
  separatorCloud,
  separatorCloudsBackground,
  separatorColor,
  ...rest
}: SeparatorComponentProps) {
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
    ["-20%", "20%"]
  );
  return (
    <VStack
      width='100%'
      height='80'
      position='relative'
      overflow='hidden'
      ref={separatorRef}
      zIndex={50}
      {...rest}
    >
      <motion.div
        style={{
          x: translateXCloud,
          position: "absolute",
          zIndex: "40",
          margin: 0,
          width: "128rem",
          height: "20rem",
        }}
      >
        <Image
          as={motion.img}
          src={separatorCloudsBackground}
          alt='cloud separator cover'
          opacity='0.3'
          width='100%'
          height='100%'
          objectFit='fill'
        />
      </motion.div>

      <motion.div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          x: translateXHeading,
          position: "absolute",
          zIndex: 30,
          margin: 0,
        }}
      >
        <Heading
          as={motion.h1}
          fontSize='6xl'
          color={separatorColor}
          textAlign='center'
          display='inline-block'
        >
          {separatorLabel}
        </Heading>
      </motion.div>
      <motion.div
        style={{
          x: translateXCloud,
          position: "absolute",
          zIndex: "20",
          margin: 0,
          width: "64rem",
          height: "20rem",
        }}
      >
        <Image
          as={motion.img}
          src={separatorCloud}
          alt='cloud separator'
          width='100%'
          height='100%'
          objectFit='fill'
        />
      </motion.div>
    </VStack>
  );
}
