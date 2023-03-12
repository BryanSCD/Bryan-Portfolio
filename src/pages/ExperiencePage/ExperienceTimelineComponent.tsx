import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Circle,
  Divider,
  DividerProps,
  Heading,
  HStack,
  Image,
  ListItem,
  SquareProps,
  Stack,
  StackDivider,
  StackProps,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

export interface ExperienceTimelineProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  logo: string;
}

export interface ExperienceTimelineCustomProps {
  extraUpperDivider?: DividerProps;
  upperDivider?: DividerProps;
  circleProps?: SquareProps;
  bottomDivider?: DividerProps;
  extraBottomDivider?: DividerProps;
}

export type ExperienceTimelineComponentProps = StackProps &
  ExperienceTimelineCustomProps &
  ExperienceTimelineProps;

export function ExperienceTimelineComponent({
  title,
  subtitle,
  description,
  skills,
  logo,
  extraUpperDivider,
  upperDivider,
  circleProps,
  bottomDivider,
  extraBottomDivider,
}: ExperienceTimelineComponentProps) {
  // const isMobile = useBreakpointValue({ base: true, md: false });
  const isMobile = true;
  return (
    <VStack spacing='0'>
      {/* Extra upper divider */}
      {extraUpperDivider && (
        <HStack justify='center' align='center' spacing='20'>
          <Box width='64'></Box>

          <Stack justify='center' align='center' spacing='0'>
            <Divider
              orientation='vertical'
              height='44'
              {...extraUpperDivider}
            />
          </Stack>

          <Box width='xl'></Box>
        </HStack>
      )}

      {/* Dot divider */}
      <Stack
        direction={isMobile ? "column" : "row"}
        justify='center'
        align='center'
        spacing='20'
      >
        <VStack justify='flex-start' align='center' spacing='4' width='64'>
          <Heading fontSize='xl' color='white' textAlign='center'>
            {title}
          </Heading>
          <Text fontSize='md' color='whiteAlpha.800' textAlign='center'>
            {subtitle}
          </Text>
        </VStack>

        {!isMobile && (
          <Stack justify='center' align='center' spacing='0'>
            <Divider orientation='vertical' height='44' {...upperDivider} />
            <Circle size='8' background='white' {...circleProps} />
            <Divider orientation='vertical' height='44' {...bottomDivider} />
          </Stack>
        )}

        <Card background='#FFFFFF' boxShadow='base' width={isMobile ? "100%" : "xl"}>
          <CardHeader>
            <Stack justify='center' align='center' spacing='0'>
              <Image
                width='36'
                height='8'
                src={logo}
                objectFit='cover'
                objectPosition='center'
              />
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack
              direction={isMobile ? "column" : "row"}
              justify='center'
              align='center'
              spacing='5'
              width='100%'
              divider={<StackDivider />}
            >
              <Text
                fontSize='md'
                color='gray.800'
                width='60'
                textAlign='center'
              >
                {description}
              </Text>

              <UnorderedList
                fontSize='md'
                color='black'
                width='60'
                textAlign='center'
                listStylePos='inside'
              >
                {skills.map((value, index) => (
                  <ListItem key={index}>{value}</ListItem>
                ))}
              </UnorderedList>
            </Stack>
          </CardBody>
          <CardFooter>
          </CardFooter>
        </Card>
      </Stack>

      {/* Extra bottom divider */}
      {extraBottomDivider && (
        <HStack justify='center' align='center' spacing='20'>
          <Box width='64'></Box>

          <Stack justify='center' align='center' spacing='0'>
            <Divider
              orientation='vertical'
              height='44'
              {...extraBottomDivider}
            />
          </Stack>

          <Box width='xl'></Box>
        </HStack>
      )}
    </VStack>
  );
}
