import { HiCake } from 'react-icons/hi';
import {
  IoCallSharp,
  IoClipboardSharp,
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailSharp,
} from 'react-icons/io5';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  StackProps,
  Text,
  VStack,
  useBreakpointValue,
  useClipboard,
} from '@chakra-ui/react';

import { ContactProps } from './ContactDetails';
import ContactForm from './ContactForm';

export type ContactcomponentProps = ContactProps & StackProps;

export function ContactComponent({
  github,
  linkedin,
  email,
  number,
  numberLabel,
  whatsappLink,
}: ContactcomponentProps) {
  const isLarge = useBreakpointValue({ base: true, xl: false }, { ssr: false });

  const clipboardEmail = useClipboard(email);
  const clipboardNumber = useClipboard(number);

  return (
    <Card
      bgColor='blackAlpha.700'
      overflow='hidden'
      paddingX={isLarge ? '0' : '14'}
      paddingY={isLarge ? '4' : '9'}
      width={isLarge ? '100%' : 'container.lg'}
    >
      <CardHeader pt='0'>
        <Heading color='white' fontSize='3xl'>
          Hire me!
        </Heading>
        <Text color='whiteAlpha.900' fontSize='lg'>
          Fill up the form below to contact
        </Text>
      </CardHeader>
      <CardBody pb='0'>
        <Stack align='top' direction={isLarge ? 'column' : 'row'} spacing='4' width='100%'>
          <VStack spacing='2.5' width='100%'>
            <Image
              bgColor='whiteAlpha.800'
              height='64'
              objectFit='scale-down'
              objectPosition='center'
              rounded='xl'
              shadow='xl'
              src='./contact/BryanSCD.png'
              width='auto'
            />

            <Text color='white' fontSize='lg' textAlign='center' width='100%'>
              <strong>Bryan Smith</strong>, Collazos Duran
            </Text>
            <HStack spacing='2.5'>
              <Link href={github} isExternal>
                <IconButton
                  aria-label='Github'
                  bgColor='whiteAlpha.50'
                  color='white'
                  colorScheme='purple'
                  icon={<IoLogoGithub />}
                  isRound
                  size='md'
                  variant='solid'
                />
              </Link>

              <Link href={linkedin} isExternal>
                <IconButton
                  aria-label='Linkedin'
                  bgColor='whiteAlpha.50'
                  color='white'
                  colorScheme='purple'
                  icon={<IoLogoLinkedin />}
                  isRound
                  size='md'
                  variant='solid'
                />
              </Link>
            </HStack>

            <ButtonGroup isAttached width='100%'>
              <Button
                as='a'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='purple'
                href={`mailto:${email}`}
                leftIcon={<Icon as={IoMailSharp} />}
                rel='external'
                size='md'
                target='_blank'
                variant='solid'
                width='100%'
              >
                {clipboardEmail.hasCopied ? 'Copied!' : email}
              </Button>

              <IconButton
                aria-label='Clipboard'
                as='a'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='green'
                href='#'
                icon={<IoClipboardSharp />}
                size='md'
                variant='solid'
                onClick={(e) => {
                  clipboardEmail.onCopy();
                  e.preventDefault();
                }}
              />
            </ButtonGroup>

            <ButtonGroup isAttached width='100%'>
              <Button
                as='a'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='purple'
                href={whatsappLink}
                leftIcon={<Icon as={IoCallSharp} />}
                rel='external'
                size='md'
                target='_blank'
                variant='solid'
                width='100%'
              >
                {clipboardNumber.hasCopied ? 'Copied!' : numberLabel}
              </Button>
              <IconButton
                aria-label='Clipboard'
                as='a'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='green'
                href='#'
                icon={<IoClipboardSharp />}
                size='md'
                variant='solid'
                onClick={(e) => {
                  clipboardNumber.onCopy();
                  e.preventDefault();
                }}
              />
            </ButtonGroup>
            <Flex alignItems='center' color='white' justifyContent='center' p='1' width='100%'>
              <Icon as={HiCake} mr='2' />
              <Text fontSize='md'>29/09/2001 (21 yo)</Text>
            </Flex>
            <Flex alignItems='center' color='white' justifyContent='center' p='1' width='100%'>
              <Icon as={IoLocationSharp} mr='2' />
              <Text fontSize='md'>
                Munich, <strong>Germany</strong>
              </Text>
            </Flex>
          </VStack>

          <VStack spacing='0' width='100%'>
            <Card bgColor='blackAlpha.500' height='100%' width='100%'>
              <CardBody p='0'>
                <ContactForm />
              </CardBody>
            </Card>

            <Flex alignItems='center' height='100%'>
              <Heading color='white' fontSize='2xl' margin='auto' pb='4' pt='8' textAlign='center'>
                {"Let's make it work."}
              </Heading>
            </Flex>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
}
