import { StackProps, useBreakpointValue, VStack } from "@chakra-ui/react";

export interface SidebarProps extends StackProps {}

export function Sidebar({ children, ...rest }: SidebarProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack
      {...rest}
      pos='fixed'
      right='5'
      top='50%'
      transform='translate(0, -50%)'
      py='4'
      px='2'
      spacing='4'
      bgColor='white'
      alignContent='center'
      rounded='3xl'
    >
      {children}
    </VStack>
  );
}
