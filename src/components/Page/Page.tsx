import { Suspense, lazy, useMemo } from 'react';

import {
  Box,
  StackProps,
  SystemProps,
  VStack,
  forwardRef,
  useBreakpointValue,
} from '@chakra-ui/react';

import { CloudsComponentProps } from './CloudsComponent';

export type PageProps = {
  childrenPaddingX?: SystemProps['padding'];
  childrenPaddingLeft?: SystemProps['padding'];
  childrenPaddingRight?: SystemProps['padding'];
  childrenPaddingY?: SystemProps['padding'];
  childrenSeparatorSpacing?: SystemProps['margin'];
  separatorProps?: CloudsComponentProps;
} & StackProps;

export const Page = forwardRef<PageProps, 'div'>(
  (
    {
      children,
      childrenPaddingX,
      childrenPaddingLeft = '8',
      childrenPaddingRight = '8',
      childrenPaddingY,
      childrenSeparatorSpacing = '0',
      separatorProps,
      ...rest
    },
    ref,
  ) => {
    const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });

    const SeparatorComponent = useMemo(() => {
      if (!separatorProps) {
        return;
      }
      if (isSmall) {
        return lazy(() => import('./SeparatorMobileComponent'));
      } else {
        return lazy(() => import('./SeparatorDesktopComponent'));
      }
    }, [separatorProps, isSmall]);
    if (childrenPaddingX) {
      childrenPaddingLeft = childrenPaddingX;
      childrenPaddingRight = childrenPaddingX;
    }

    if (!childrenPaddingY) {
      childrenPaddingY = isSmall ? '10' : '20';
    }
    return (
      <VStack ref={ref} spacing={childrenSeparatorSpacing} {...rest}>
        {/* Separator */}
        {SeparatorComponent && (
          <Suspense>
            {separatorProps && <SeparatorComponent zIndex={20} {...separatorProps} />}
          </Suspense>
        )}
        {/* Page content */}
        <Box
          paddingLeft={childrenPaddingLeft}
          paddingRight={childrenPaddingRight}
          paddingY={childrenPaddingY}
          width='100%'
          zIndex={10}
        >
          {children}
        </Box>
      </VStack>
    );
  },
);
