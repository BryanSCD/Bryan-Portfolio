import { Flex, FlexProps, forwardRef } from '@chakra-ui/react';

export const Sidebar = forwardRef<FlexProps, 'div'>(({ children, ...rest }, ref) => {
  return (
    <Flex
      {...rest}
      ref={ref}
      alignContent='center'
      bgColor='white'
      gap='4'
      pos='fixed'
      px='2'
      py='4'
      rounded='3xl'
      shadow='dark-lg'
    >
      {children}
    </Flex>
  );
});
