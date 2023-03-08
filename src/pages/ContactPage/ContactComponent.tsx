import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Image,
  StackProps,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  Stack,
  Text,
  Avatar,
  Icon,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { HiCake } from "react-icons/hi";
import {
  IoMailSharp,
  IoCallSharp,
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoPersonOutline,
  IoMailOutline,
} from "react-icons/io5";

export interface ContactProps extends StackProps {}

export function ContactComponent({}: ContactProps) {
  return (
    <Card
      paddingX='14'
      paddingY='9'
      width='container.lg'
      bgColor='whiteAlpha.500'
      overflow='hidden'
    >
      <CardHeader pt='0'>
        <Heading fontSize='3xl' color='black'>
          Hire me!
        </Heading>
        <Text fontSize='lg' color='gray.600'>
          Fill up the form below to contact
        </Text>
      </CardHeader>
      <CardBody pb='0'>
        <HStack spacing='4' width='100%' align='top'>
          <VStack spacing='2.5' width='100%'>
            <Image
              width='100%'
              height='64'
              src='./avatar.png'
              objectFit='scale-down'
              objectPosition='center'
            ></Image>
            <Button
              leftIcon={<Icon as={IoMailSharp} />}
              size='md'
              variant='solid'
              colorScheme='whiteAlpha'
              backgroundColor='whiteAlpha.700'
              color='black'
              width='100%'
            >
              bryanscduran@gmail.com
            </Button>
            <Button
              leftIcon={<Icon as={IoCallSharp} />}
              size='md'
              variant='solid'
              colorScheme='whiteAlpha'
              backgroundColor='whiteAlpha.700'
              color='black'
              width='100%'
            >
              (+34) 695 54 97 91
            </Button>
            <Button
              leftIcon={<Icon as={HiCake} />}
              size='md'
              variant='unstyled'
              width='100%'
              cursor='default'
            >
              29/09/2001 (21 yo)
            </Button>
            <Button
              leftIcon={<Icon as={IoLocationSharp} />}
              size='md'
              width='100%'
              variant='unstyled'
              cursor='default'
            >
              Munich, Germany
            </Button>
            <HStack spacing='2.5'>
              <Icon as={IoLogoGithub} height='8' width='8' />
              <Icon as={IoLogoLinkedin} height='8' width='8' />
            </HStack>
          </VStack>

          <VStack spacing='0' width='100%'>
            <Card width='100%' bgColor='whiteAlpha.900'>
              <CardBody p='0'>
                <VStack padding='4' spacing='2.5' width='100%' align='start'>
                  <Heading fontSize='md' color='black'>
                    Your name / Your company
                  </Heading>
                  <InputGroup>
                    <InputLeftElement children={<IoPersonOutline />} />
                    <Input type='text' />
                  </InputGroup>

                  <Heading fontSize='md' color='black'>
                    Email
                  </Heading>
                  <InputGroup>
                    <InputLeftElement children={<IoMailOutline />} />
                    <Input type='text' />
                  </InputGroup>

                  <Heading fontSize='md' color='black'>
                    Message
                  </Heading>

                  <Textarea placeholder='Hello!' />

                  <Flex height='100%' width='100%' justifyContent='end'>
                    <Button colorScheme='blue'>Send message!</Button>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>

            <Flex alignItems='center' height='100%'>
              <Heading
                margin='auto'
                fontSize='2xl'
                color='black'
                textAlign='center'
                pt='8'
                pb='4'
              >
                Let's make it work.
              </Heading>
            </Flex>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
}
