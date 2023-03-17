import {
  forwardRef,
  Heading,
  ListItem,
  Stack,
  SystemProps,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Page, PageProps } from "../../components";
import { StudiesComponent } from "./StudiesComponent";

export interface StudiesPageProps extends PageProps {
  separatorColor: SystemProps["color"];
}

export const StudiesPage = forwardRef<StudiesPageProps, "div">(
  ({ separatorColor, ...rest }, ref) => {
    const isMedium = useBreakpointValue({ base: true, lg: false });
    return (
      <Page
        ref={ref}
        separatorProps={{
          separatorLabel: "Studies",
          separatorCloud: "./studies/cloud.png",
          separatorCloudsBackground: "./studies/clouds_background.png",
          separatorColor,
        }}
        {...rest}
      >
        <VStack spacing={isMedium ? "14" : "28"}>
          <Heading
            fontSize={isMedium ? "4xl" : "5xl"}
            color='white'
            textAlign='center'
          >
            Degree in Software Engineering
          </Heading>
          <StudiesComponent
            title='Technical University of Munich'
            subtitle='2022-2023 (2 semesters)'
            color='white'
            backgroundColor='#3070B3'
            imageSrc='./studies/logo_tum_white.png'
            alignSelf='start'
            width={isMedium ? "100%" : "50%"}
          >
            <Text fontSize='md' align='center'>
              <strong>Remarkable grades:</strong>
              <br /> Patterns in Software Engineering: 1.0
            </Text>
          </StudiesComponent>

          <StudiesComponent
            title='Universidad Politécnica de Madrid'
            subtitle='2019-2022 (6 semesters)'
            imageSrc='./studies/logo_upm.png'
            alignSelf='end'
            width={isMedium ? "100%" : "60%"}
          >
            <Text fontSize='lg' textAlign='center'>
              <strong>Academic Excellence Scholarship 2020</strong>
            </Text>

            <Text fontSize='md' align='center'>
              <strong>Average grade:</strong> 2.0
            </Text>

            <Text fontSize='md' align='center'>
              <strong>With honours</strong>
            </Text>
            <UnorderedList textAlign='center' listStylePos='inside'>
              <ListItem>Algorithms and Complexity</ListItem>
              <ListItem>Probability and statistics</ListItem>
              <ListItem>Programming Workshop</ListItem>
              <ListItem>Information security</ListItem>
              <ListItem>Security Essentials</ListItem>
            </UnorderedList>
          </StudiesComponent>

          <Heading fontSize={isMedium ? "3xl" : "4xl"} color='white'>
            Complementary
          </Heading>

          <Stack
            direction={isMedium ? "column" : "row"}
            spacing={isMedium ? "14" : "28"}
            width='100%'
            alignItems='center'
            justifyContent='center'
          >
            <StudiesComponent
              title='Languages'
              color='white'
              backgroundColor='gray.600'
            >
              <UnorderedList textAlign='center' listStylePos='inside'>
                <ListItem>
                  <strong>English:</strong> Full professional proficiency
                </ListItem>
                <ListItem>
                  <strong>Spanish:</strong> Native
                </ListItem>
              </UnorderedList>
            </StudiesComponent>

            <StudiesComponent
              title='Driving license'
              color='white'
              backgroundColor='gray.600'
            >
              <Text>European B</Text>
            </StudiesComponent>
          </Stack>
        </VStack>
      </Page>
    );
  }
);
