import {
  Heading,
  ListItem,
  Stack,
  SystemProps,
  Text,
  UnorderedList,
  VStack,
  forwardRef,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Page, PageProps } from '../../components';
import { StudiesComponent } from './StudiesComponent';

export interface StudiesPageProps extends PageProps {
  separatorColor: SystemProps['color'];
}

export const StudiesPage = forwardRef<StudiesPageProps, 'div'>(
  ({ separatorColor, ...rest }, ref) => {
    const isMedium = useBreakpointValue({ base: true, lg: false }, { ssr: false });
    return (
      <Page
        ref={ref}
        separatorProps={{
          separatorLabel: 'Studies',
          separatorCloud: './studies/cloud.png',
          separatorCloudsBackgroundSrc: './studies/clouds_background.png',
          separatorColor,
        }}
        {...rest}
      >
        <VStack spacing={isMedium ? '14' : '28'}>
          <Heading color='white' fontSize={isMedium ? '4xl' : '5xl'} textAlign='center'>
            Degree in Software Engineering
          </Heading>
          <StudiesComponent
            alignSelf='flex-start'
            backgroundColor='#3070B3'
            color='white'
            imageSrc='./studies/logo_tum_white.png'
            subtitle='2022-2023 (2 semesters)'
            title='Technical University of Munich'
            width={isMedium ? '100%' : '50%'}
          >
            <Text align='center' fontSize='md'>
              <strong>Average grade:</strong> 2.12
            </Text>

            <Text align='center' fontSize='md'>
              <strong>Remarkable grades:</strong>
              <br /> Patterns in Software Engineering: 1.0
              <br /> Advanced Seminar Course JavaScript Technology: 1.0
            </Text>
          </StudiesComponent>

          <StudiesComponent
            alignSelf='flex-end'
            imageSrc='./studies/logo_upm.png'
            subtitle='2019-2022 (6 semesters)'
            title='Universidad Politécnica de Madrid'
            width={isMedium ? '100%' : '60%'}
          >
            <Text fontSize='lg' textAlign='center'>
              <strong>Academic Excellence Scholarship 2020</strong>
            </Text>

            <Text align='center' fontSize='md'>
              <strong>Average grade:</strong> 2.0
            </Text>

            <Text align='center' fontSize='md'>
              <strong>With honours</strong>
            </Text>
            <UnorderedList listStylePos='inside' textAlign='center'>
              <ListItem>Algorithms and Complexity</ListItem>
              <ListItem>Probability and statistics</ListItem>
              <ListItem>Programming Workshop</ListItem>
              <ListItem>Information security</ListItem>
              <ListItem>Security Essentials</ListItem>
            </UnorderedList>
          </StudiesComponent>

          <Heading color='white' fontSize={isMedium ? '3xl' : '4xl'}>
            Complementary
          </Heading>

          <Stack
            alignItems='center'
            direction={isMedium ? 'column' : 'row'}
            justifyContent='center'
            spacing={isMedium ? '14' : '28'}
            width='100%'
          >
            <StudiesComponent backgroundColor='gray.600' color='white' title='Languages'>
              <UnorderedList listStylePos='inside' textAlign='center'>
                <ListItem>
                  <strong>English:</strong> Full professional proficiency
                </ListItem>
                <ListItem>
                  <strong>Spanish:</strong> Native
                </ListItem>
              </UnorderedList>
            </StudiesComponent>

            <StudiesComponent backgroundColor='gray.600' color='white' title='Driving license'>
              <Text>European B</Text>
            </StudiesComponent>
          </Stack>
        </VStack>
      </Page>
    );
  },
);
