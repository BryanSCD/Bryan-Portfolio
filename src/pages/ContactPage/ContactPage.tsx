import { StackProps, SystemProps, VStack } from "@chakra-ui/react";
import { Page } from "../../components";
import { ContactComponent } from "./ContactComponent";

export interface ContactPageProps extends StackProps {
  separatorColor: SystemProps["color"];
}

export function ContactPage({ separatorColor, ...rest }: ContactPageProps) {
  return (
    <Page
      separator='Contact'
      separatorColor={separatorColor}
      separatorCloud='./contact/cloud.png'
      separatorCloudsBackground='./contact/clouds_background.png'
      childrenPaddingX='0'
      childrenPaddingY='0'
      separatorSpacing='-40'
      {...rest}
    >
      <VStack
        bg='url(/contacts_bg.jpg)'
        backgroundSize='cover'
        backgroundPosition='center'
        pt='80'
        pb='20'
      >
        <ContactComponent />
      </VStack>
    </Page>
  );
}
