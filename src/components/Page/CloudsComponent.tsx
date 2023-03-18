import {
  forwardRef,
  Heading,
  Image,
  SystemProps,
  VStack,
} from "@chakra-ui/react";
import { motion, MotionValue } from "framer-motion";

export type CloudsComponentProps = {
  separatorLabel: string;
  separatorCloud: string;
  separatorColor: SystemProps["color"];
  separatorCloudsBackground?: string;
  translateXCloud?: string | MotionValue;
  translateXHeading?: string | MotionValue;
};

export const CloudsComponent = forwardRef<CloudsComponentProps, "div">(
  (
    {
      separatorLabel,
      separatorCloud,
      separatorCloudsBackground,
      separatorColor,
      translateXCloud = "0",
      translateXHeading = "0",
      ...rest
    },
    ref
  ) => {
    return (
      <VStack
        width='100%'
        height='80'
        position='relative'
        overflow='hidden'
        ref={ref}
        zIndex={50}
        {...rest}
      >
        {separatorCloudsBackground && (
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
              alt='cloud separator background'
              opacity='0.3'
              width='100%'
              height='100%'
              objectFit='fill'
            />
          </motion.div>
        )}

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
);
