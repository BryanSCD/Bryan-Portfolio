import {
  Box,
  Flex,
  Stack,
  StackProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export interface SidebarProps extends StackProps {}

export function Sidebar({ children, ...rest }: SidebarProps) {
  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      {...rest}
      pos='fixed'
      right={isSmall ? "auto" : "5"}
      top={isSmall ? "auto" : "50%"}
      bottom={isSmall ? "5" : "auto"}
      left={isSmall ? "50%" : "auto"}
      transform={isSmall ? "translate(-50%, 0)" : "translate(0, -50%)"}
      flexDirection={isSmall ? "row" : "column"}
      py='4'
      px='2'
      gap='4'
      bgColor='white'
      alignContent='center'
      rounded='3xl'
    >
      {children}
    </Flex>
  );
}
