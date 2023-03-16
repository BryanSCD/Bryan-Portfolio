import {
  forwardRef, SystemProps,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import { Page, PageProps } from "../../components";
import { ContactComponent } from "./ContactComponent";

const contactDetails = {
  github: "https://github.com/BryanSCD",
  linkedin: "https://www.linkedin.com/in/bryansduran/",
  email: "bryanscduran@gmail.com",
  number: "+34695549791",
  numberLabel: "(+34) 695 54 97 91",
  whatsappLink:
    "https://api.whatsapp.com/send?phone=34695549791&text=Hey%20Bryan!",
};

export type ContactPageProps = {
  separatorColor: SystemProps["color"];
} & PageProps;

export const ContactPage = forwardRef<ContactPageProps, "div">(
  ({ separatorColor, ...rest }, ref) => {
    const isSmall = useBreakpointValue({ base: true, md: false });
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
        childrenSeparatorSpacing={isSmall ? "-60" : "-40"}
        {...rest}
      >
        <VStack boxSizing='border-box' pt='80' pb='20'>
          <ContactComponent {...contactDetails} />
        </VStack>
      </Page>
    );
  }
);
