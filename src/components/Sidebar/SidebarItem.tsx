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
  onButtonClick: Function;
}

export function SidebarItem({ icon, label, onButtonClick }: SidebarItemProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Popover
        placement={isMobile ? "bottom" : "left"}
        isOpen={isOpen}
        autoFocus={false}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <IconButton
            aria-label={label}
            icon={icon}
            color='black'
            colorScheme='gray'
            size={isMobile ? "md" : "lg"}
            variant='outline'
            onPointerEnter={!isOpen ? onToggle : () => {}}
            onPointerLeave={isOpen ? onToggle : () => {}}
            onClick={() => {
              onButtonClick();
            }}
          />
        </PopoverTrigger>
        <PopoverContent bgColor='whiteAlpha.900'>
          <PopoverArrow />
          <PopoverBody py='8'>
            <Heading size='md' textAlign='center' color='black'>
              {label}
            </Heading>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
