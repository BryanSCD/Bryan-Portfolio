import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import {
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  StackProps,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

export interface SidebarItemProps extends StackProps {
  icon: ReactJSXElement;
  label: string;
  isRound?: boolean;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function SidebarItem({ icon, label, isRound, onButtonClick }: SidebarItemProps) {
  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Popover
        autoFocus={false}
        isOpen={isOpen}
        placement={isSmall ? 'bottom' : 'left'}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <IconButton
            aria-label={label}
            color='black'
            colorScheme='gray'
            icon={icon}
            isRound={!!isRound}
            maxW={isSmall ? '1rem' : '1.125rem'}
            size={isSmall ? 'md' : 'lg'}
            variant='outline'
            onClick={(e) => {
              onButtonClick(e);
            }}
            onPointerEnter={!isOpen ? onToggle : undefined}
            onPointerLeave={isOpen ? onToggle : undefined}
          />
        </PopoverTrigger>
        <PopoverContent bgColor='whiteAlpha.900'>
          <PopoverArrow />
          <PopoverBody py='8'>
            <Heading color='black' size='md' textAlign='center'>
              {label}
            </Heading>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
