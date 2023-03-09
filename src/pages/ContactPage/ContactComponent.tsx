import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  IconButton,
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
      bgColor='blackAlpha.700'
      overflow='hidden'
    >
      <CardHeader pt='0'>
        <Heading fontSize='3xl' color='white'>
          Hire me!
        </Heading>
        <Text fontSize='lg' color='whiteAlpha.900'>
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
            <HStack spacing='2.5' color='white'>
              <IconButton
                aria-label='Github'
                isRound
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                colorScheme='purple'
                icon={<IoLogoGithub />}
              ></IconButton>
              <IconButton
                aria-label='Linkedin'
                isRound
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                colorScheme='purple'
                icon={<IoLogoLinkedin />}
              ></IconButton>
            </HStack>
            <Button
              leftIcon={<Icon as={IoMailSharp} />}
              size='md'
              variant='solid'
              bgColor='whiteAlpha.50'
              colorScheme='purple'
              width='100%'
            >
              bryanscduran@gmail.com
            </Button>
            <Button
              leftIcon={<Icon as={IoCallSharp} />}
              size='md'
              variant='solid'
              bgColor='whiteAlpha.50'
              colorScheme='purple'
              width='100%'
            >
              (+34) 695 54 97 91
            </Button>
            <Button
              leftIcon={<Icon as={HiCake} />}
              size='md'
              variant='unstyled'
              color='white'
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
              color='white'
            >
              Munich, Germany
            </Button>
          </VStack>

          <VStack spacing='0' width='100%'>
            <Card width='100%' bgColor='blackAlpha.500'>
              <CardBody p='0'>
                <VStack
                  padding='4'
                  spacing='2.5'
                  width='100%'
                  align='start'
                  color='white'
                >
                  <Heading fontSize='md'>Your name / Your company</Heading>
                  <InputGroup>
                    <InputLeftElement children={<IoPersonOutline />} />
                    <Input type='text' focusBorderColor='#665cb2' />
                  </InputGroup>

                  <Heading fontSize='md'>Email</Heading>
                  <InputGroup>
                    <InputLeftElement children={<IoMailOutline />} />
                    <Input type='text' focusBorderColor='#665cb2' />
                  </InputGroup>

                  <Heading fontSize='md'>Message</Heading>

                  <Textarea placeholder='Hello!' focusBorderColor='#665cb2' />

                  <Flex height='100%' width='100%' justifyContent='end'>
                    <Button
                      color='white'
                      bgColor='whiteAlpha.500'
                      colorScheme='purple'
                    >
                      Send message!
                    </Button>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>

            <Flex alignItems='center' height='100%'>
              <Heading
                margin='auto'
                fontSize='2xl'
                color='white'
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
