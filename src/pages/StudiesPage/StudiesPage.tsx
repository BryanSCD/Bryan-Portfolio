import {
  Heading,
  HStack,
  ListItem,
  StackProps,
  SystemProps,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Page } from "../../components";
import { StudiesComponent } from "./StudiesComponent";

export interface StudiesPageProps extends StackProps {
  separatorColor: SystemProps["color"];
}

export function StudiesPage({ separatorColor, ...rest }: StudiesPageProps) {
  return (
    <Page separator='Studies' separatorColor={separatorColor} {...rest}>
      <VStack spacing='28'>
        <Heading fontSize='5xl' color='white'>
          Degree in Software Engineering
        </Heading>
        <StudiesComponent
          title='Technical University of Munich'
          subtitle='2022-2023 (2 semesters)'
          color='white'
          backgroundColor='#3070B3'
          imageSrc='./logo_tum_white.png'
          alignSelf='start'
          width='50%'
        >
          <Text fontSize='md' align='center'>
            Remarkable grades: <br /> Patterns in Software Engineering: 1.0
          </Text>
        </StudiesComponent>

        <StudiesComponent
          title='Universidad Politécnica de Madrid'
          subtitle='2019-2022 (6 semesters)'
          imageSrc='./logo_upm.png'
          alignSelf='end'
          width='60%'
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
        <Heading fontSize='4xl' color='white'>
          Complementary
        </Heading>
        <HStack>
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
        </HStack>
      </VStack>
    </Page>
  );
}
