import { SystemProps, VStack, forwardRef, useBreakpointValue } from '@chakra-ui/react';

import { Page, PageProps } from '../../components';
import { ContactComponent } from './ContactComponent';
import { BryanContactDetails } from './ContactDetails';

export type ContactPageProps = {
  separatorColor: SystemProps['color'];
} & PageProps;

export const ContactPage = forwardRef<ContactPageProps, 'div'>(
  ({ separatorColor, ...rest }, ref) => {
    const isMedium = useBreakpointValue({ base: true, lg: false }, { ssr: false });
    return (
      <Page
        ref={ref}
        bg='url(/contact/background.png)'
        bgPos={isMedium ? 'left' : 'center'}
        bgRepeat='no-repeat'
        bgSize='cover'
        childrenSeparatorSpacing='-60'
        separatorProps={{
          separatorLabel: 'Contact',
          separatorCloud: './contact/cloud.png',
          separatorCloudsBackgroundSrc: './contact/clouds_background.png',
          separatorColor,
        }}
        {...rest}
      >
        <VStack boxSizing='border-box' pt='60'>
          <ContactComponent {...BryanContactDetails} />
        </VStack>
      </Page>
    );
  },
);
