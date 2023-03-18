import {
  Box,
  forwardRef,
  StackProps,
  SystemProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import {
  SeparatorDesktopComponent,
  SeparatorDesktopComponentProps,
} from "./SeparatorDesktopComponent";
import { SeparatorMobileComponent } from "./SeparatorMobileComponent";

export type PageProps = {
  childrenPaddingX?: SystemProps["padding"];
  childrenPaddingLeft?: SystemProps["padding"];
  childrenPaddingRight?: SystemProps["padding"];
  childrenPaddingY?: SystemProps["padding"];
  childrenSeparatorSpacing?: SystemProps["margin"];
  separatorProps?: SeparatorDesktopComponentProps;
} & StackProps;

export const Page = forwardRef<PageProps, "div">(
  (
    {
      children,
      childrenPaddingX,
      childrenPaddingLeft = "8",
      childrenPaddingRight = "8",
      childrenPaddingY,
      childrenSeparatorSpacing = "0",
      separatorProps,
      ...rest
    },
    ref
  ) => {
    const isSmall = useBreakpointValue(
      { base: true, md: false },
      { ssr: false }
    );

    if (childrenPaddingX) {
      childrenPaddingLeft = childrenPaddingX;
      childrenPaddingRight = childrenPaddingX;
    }

    if (!childrenPaddingY) {
      childrenPaddingY = isSmall ? "10" : "20";
    }

    return (
      <VStack ref={ref} spacing={childrenSeparatorSpacing} {...rest}>
        {separatorProps && !isSmall && (
          <SeparatorDesktopComponent {...separatorProps} />
        )}

        {separatorProps && isSmall && (
          <SeparatorMobileComponent {...separatorProps} />
        )}
        <Box
          paddingLeft={childrenPaddingLeft}
          paddingRight={childrenPaddingRight}
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
