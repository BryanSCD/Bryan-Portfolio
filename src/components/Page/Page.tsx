import {
  Box,
  Heading,
  Image,
  StackProps,
  SystemProps,
  VStack,
} from "@chakra-ui/react";

export interface PageProps extends StackProps {
  childrenPaddingX?: SystemProps["padding"];
  childrenPaddingY?: SystemProps["padding"];
  separator?: string;
  separatorColor?: SystemProps["color"];
  separatorSpacing?: SystemProps["margin"];
}

export function Page({
  separator,
  children,
  childrenPaddingX = "28",
  childrenPaddingY = "20",
  separatorColor = "black",
  separatorSpacing = "0",
  ...rest
}: PageProps) {
  return (
    <VStack
      {...rest}
      justify='flex-start'
      align='flex-start'
      alignSelf='stretch'
      spacing={separatorSpacing}
    >
      {separator && (
        <Box
          width='100%'
          height='80'
          position='relative'
          display='inline-block'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            src='./cloud_separator_cover.png'
            alt='cloud separator cover'
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            textAlign='center'
            display='inline-block'
            zIndex={3}
          />
          <Heading
            fontSize='6xl'
            color={separatorColor}
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            textAlign='center'
            display='inline-block'
            zIndex={2}
          >
            {separator}
          </Heading>

          <Image
            src='./cloud_separator.png'
            alt='cloud separator'
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            textAlign='center'
            display='inline-block'
            objectFit='fill'
            width='100%'
            zIndex={1}
          />
        </Box>
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
