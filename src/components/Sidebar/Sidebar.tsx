import {
  Stack,
  StackProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export interface SidebarProps extends StackProps {}

export function Sidebar({ children, ...rest }: SidebarProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      {...rest}
      pos='fixed'
      direction={isMobile ? "row" : "column"}
      right={isMobile ? "auto" : "5"}
      top={isMobile ? "auto" : "50%"}
      bottom={isMobile ? "5" : "auto"}
      left={isMobile ? "50%" : "auto"}
      transform={isMobile ? "translate(-50%, 0)" : "translate(0, -50%)"}
      py='4'
      px='2'
      spacing='4'
      bgColor='white'
      alignContent='center'
      rounded='3xl'
    >
      {children}
    </Stack>
  );
}
