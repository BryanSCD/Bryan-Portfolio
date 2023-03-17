import { forwardRef, SystemProps, VStack } from "@chakra-ui/react";
import { Page, PageProps } from "../../components";
import { ContactComponent } from "./ContactComponent";
import { BryanContactDetails } from "./ContactDetails";

export type ContactPageProps = {
  separatorColor: SystemProps["color"];
} & PageProps;

export const ContactPage = forwardRef<ContactPageProps, "div">(
  ({ separatorColor, ...rest }, ref) => {
    return (
      <Page
        ref={ref}
        separatorProps={{
          separatorLabel: "Contact",
          separatorCloud: "./contact/cloud.png",
          separatorCloudsBackground: "./contact/clouds_background.png",
          separatorColor,
        }}
        bg='url(/contact/background.png)'
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        childrenSeparatorSpacing='-60'
        {...rest}
      >
        <VStack boxSizing='border-box' pt='60'>
          <ContactComponent {...BryanContactDetails} />
        </VStack>
      </Page>
    );
  }
);
