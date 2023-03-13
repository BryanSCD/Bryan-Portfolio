import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  StackProps,
  Text,
  Textarea,
  useBreakpointValue,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { HiCake } from "react-icons/hi";
import {
  IoCallSharp,
  IoClipboardSharp,
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoMailSharp,
  IoPersonOutline,
} from "react-icons/io5";

export interface ContactProps extends StackProps {
  github: string;
  linkedin: string;
  email: string;
  number: string;
  numberLabel: string;
  whatsappLink: string;
}

export function ContactComponent({
  github,
  linkedin,
  email,
  number,
  numberLabel,
  whatsappLink,
}: ContactProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const clipboardEmail = useClipboard(email);
  const clipboardNumber = useClipboard(number);

  return (
    <Card
      paddingX={isMobile ? "0" : "14"}
      paddingY={isMobile ? "4" : "9"}
      width={isMobile ? "90%" : "container.lg"}
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
        <Stack
          spacing='4'
          width='100%'
          align='top'
          direction={isMobile ? "column" : "row"}
        >
          <VStack spacing='2.5' width='100%'>
            <Image
              width='100%'
              height='64'
              src='./avatar.png'
              objectFit='scale-down'
              objectPosition='center'
            />

            <Text fontSize='md' width='100%' color='white' textAlign='center'>
              <strong>Bryan Smith</strong>, Collazos Duran
            </Text>
            <HStack spacing='2.5'>
              <Link href={github} isExternal>
                <IconButton
                  aria-label='Github'
                  isRound
                  size='md'
                  variant='solid'
                  bgColor='whiteAlpha.50'
                  color='white'
                  colorScheme='purple'
                  icon={<IoLogoGithub />}
                />
              </Link>

              <Link href={linkedin} isExternal>
                <IconButton
                  aria-label='Linkedin'
                  isRound
                  size='md'
                  variant='solid'
                  bgColor='whiteAlpha.50'
                  color='white'
                  colorScheme='purple'
                  icon={<IoLogoLinkedin />}
                />
              </Link>
            </HStack>

            <ButtonGroup isAttached width='100%'>
              <Button
                as='a'
                href={`mailto:${email}`}
                target='_blank'
                rel='external'
                leftIcon={<Icon as={IoMailSharp} />}
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='purple'
                width='100%'
              >
                {clipboardEmail.hasCopied ? "Copied!" : email}
              </Button>

              <IconButton
                as='a'
                href='javascript:void(0)'
                aria-label='Clipboard'
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='green'
                icon={<IoClipboardSharp />}
                onClick={() => {
                  clipboardEmail.onCopy();
                }}
              />
            </ButtonGroup>

            <ButtonGroup isAttached width='100%'>
              <Button
                as='a'
                href={whatsappLink}
                target='_blank'
                rel='external'
                leftIcon={<Icon as={IoCallSharp} />}
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='purple'
                width='100%'
              >
                {clipboardNumber.hasCopied ? "Copied!" : numberLabel}
              </Button>
              <IconButton
                as='a'
                href='javascript:void(0)'
                aria-label='Clipboard'
                size='md'
                variant='solid'
                bgColor='whiteAlpha.50'
                color='white'
                colorScheme='green'
                icon={<IoClipboardSharp />}
                onClick={() => {
                  clipboardNumber.onCopy();
                }}
              />
            </ButtonGroup>
            <Flex
              justifyContent='center'
              alignItems='center'
              width='100%'
              color='white'
              p='1'
            >
              <Icon as={HiCake} mr='2' />
              <Text fontSize='md'>29/09/2001 (21 yo)</Text>
            </Flex>
            <Flex
              justifyContent='center'
              alignItems='center'
              width='100%'
              color='white'
              p='1'
            >
              <Icon as={IoLocationSharp} mr='2' />
              <Text fontSize='md'>
                Munich, <strong>Germany</strong>
              </Text>
            </Flex>
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

                  <Textarea
                    placeholder='Hey Bryan!'
                    focusBorderColor='#665cb2'
                  />

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
        </Stack>
      </CardBody>
    </Card>
  );
}
