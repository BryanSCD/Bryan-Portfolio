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
  childrenPaddingLeft?: SystemProps["padding"];
  childrenPaddingRight?: SystemProps["padding"];
  childrenPaddingY?: SystemProps["padding"];
  childrenSeparatorSpacing?: SystemProps["margin"];
  separatorProps?: SeparatorComponentProps;
} & StackProps;

export const Page = forwardRef<PageProps, "div">(
  (
    {
      children,
      childrenPaddingX,
      childrenPaddingLeft = 8,
      childrenPaddingRight = 8,
      childrenPaddingY,
      childrenSeparatorSpacing = "0",
      separatorProps,
      ...rest
    },
    ref
  ) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    if (childrenPaddingX) {
      childrenPaddingLeft = childrenPaddingX;
      childrenPaddingRight = childrenPaddingX;
    }

    if (!childrenPaddingY) {
      childrenPaddingY = isMobile ? "10" : "20";
    }

    return (
      <VStack ref={ref} spacing={childrenSeparatorSpacing} {...rest}>
        {separatorProps && <SeparatorComponent {...separatorProps} />}
        <Box
          paddingLeft={childrenPaddingLeft}
          paddingRight={childrenPaddingRight}
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
