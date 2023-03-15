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
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      {...rest}
      pos='fixed'
      right={isMobile ? "auto" : "5"}
      top={isMobile ? "auto" : "50%"}
      bottom={isMobile ? "5" : "auto"}
      left={isMobile ? "50%" : "auto"}
      transform={isMobile ? "translate(-50%, 0)" : "translate(0, -50%)"}
      flexDirection={isMobile ? "row" : "column"}
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
