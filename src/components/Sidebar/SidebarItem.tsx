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
  isRound?: boolean;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function SidebarItem({ icon, label, isRound, onButtonClick }: SidebarItemProps) {
  const isSmall = useBreakpointValue({ base: true, md: false });

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Popover
        placement={isSmall ? "bottom" : "left"}
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
            size={isSmall ? "md" : "lg"}
            variant='outline'
            isRound={!!isRound}
            onPointerEnter={!isOpen ? onToggle : undefined}
            onPointerLeave={isOpen ? onToggle : undefined}
            onClick={(e) => {
              onButtonClick(e);
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
