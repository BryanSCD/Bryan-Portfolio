import {
  Flex,
  FlexProps,
  forwardRef
} from "@chakra-ui/react";

export const Sidebar = forwardRef<FlexProps, "div">(
  ({ children, ...rest }, ref) => {
    return (
      <Flex
        {...rest}
        pos='fixed'
        py='4'
        px='2'
        gap='4'
        bgColor='white'
        alignContent='center'
        rounded='3xl'
        ref={ref}
      >
        {children}
      </Flex>
    );
  }
);
