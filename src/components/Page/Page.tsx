import {
  Box,
  forwardRef,
  StackProps,
  SystemProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import {
  SeparatorComponent,
  SeparatorComponentProps,
} from "./SeparatorComponent";

export type PageProps = {
  childrenPaddingX?: SystemProps["padding"];
  childrenPaddingY?: SystemProps["padding"];
  childrenSeparatorSpacing?: SystemProps["margin"];
  separatorProps?: SeparatorComponentProps;
} & StackProps;

export const Page = forwardRef<PageProps, "div">(
  (
    {
      children,
      childrenPaddingX,
      childrenPaddingY,
      childrenSeparatorSpacing = "0",
      separatorProps,
      ...rest
    },
    ref
  ) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    if (!childrenPaddingX) {
      childrenPaddingX = isMobile ? "8" : "28";
    }

    if (!childrenPaddingY) {
      childrenPaddingY = isMobile ? "10" : "20";
    }

    return (
      <VStack ref={ref} spacing={childrenSeparatorSpacing} {...rest}>
        {separatorProps && <SeparatorComponent {...separatorProps} />}
        <Box
          paddingX={childrenPaddingX}
          paddingY={childrenPaddingY}
          overflow='hidden'
          width='100%'
          zIndex={10}
        >
          {children}
        </Box>
      </VStack>
    );
  }
);
