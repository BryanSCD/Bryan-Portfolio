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
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface SidebarItemProps extends StackProps {
  icon: ReactJSXElement;
  label: string;
}

export function SidebarItem({
  icon,
  label,
}: SidebarItemProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Popover
        placement='left'
        isOpen={isOpen}
        autoFocus={false}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <IconButton
            aria-label={label}
            icon={icon}
            colorScheme='gray'
            size='lg'
            variant='outline'
            onPointerEnter={onToggle}
            onPointerLeave={onToggle}
          />
        </PopoverTrigger>
        <PopoverContent bgColor='whiteAlpha.900'>
          <PopoverArrow />
          <PopoverBody py='8'>
            <Heading size='md' textAlign='center'>
              {label}
            </Heading>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
