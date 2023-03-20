import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Circle,
  Divider,
  DividerProps,
  HStack,
  Heading,
  Image,
  ListItem,
  SquareProps,
  Stack,
  StackDivider,
  StackProps,
  Text,
  UnorderedList,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ExperienceProps } from './Experience';

export interface ExperienceTimelineCustomProps {
  extraUpperDivider?: DividerProps;
  upperDivider?: DividerProps;
  circleProps?: SquareProps;
  bottomDivider?: DividerProps;
  extraBottomDivider?: DividerProps;
}

export type ExperienceTimelineComponentProps = StackProps &
  ExperienceTimelineCustomProps &
  ExperienceProps;

export function ExperienceTimelineComponent({
  title,
  subtitle,
  description,
  skills,
  logo,
  footer,
  extraUpperDivider,
  upperDivider,
  circleProps,
  bottomDivider,
  extraBottomDivider,
}: ExperienceTimelineComponentProps) {
  const isLarge = useBreakpointValue({ base: true, xl: false }, { ssr: false });
  return (
    <VStack spacing='0' width='100%'>
      {/* Extra upper divider */}
      {extraUpperDivider && !isLarge && (
        <HStack align='center' justify='center' spacing='20'>
          <Box width='64' />

          <Stack align='center' justify='center' spacing='0'>
            <Divider height='44' orientation='vertical' {...extraUpperDivider} />
          </Stack>

          <Box width='xl' />
        </HStack>
      )}

      {/* Dot divider */}
      <Stack
        align='center'
        direction={isLarge ? 'column' : 'row'}
        justify='center'
        spacing='20'
        width='100%'
      >
        {/* Left side */}
        <VStack align='center' justify='flex-start' spacing='4' width={isLarge ? '70%' : '64'}>
          <Heading color='white' fontSize='xl' textAlign='center'>
            {title}
          </Heading>
          <Text color='whiteAlpha.800' fontSize='md' textAlign='center'>
            {subtitle}
          </Text>
        </VStack>

        {/* Divider */}
        {!isLarge && (
          <Stack align='center' justify='center' spacing='0'>
            <Divider height='44' orientation='vertical' {...upperDivider} />
            <Circle background='white' size='8' {...circleProps} />
            <Divider height='44' orientation='vertical' {...bottomDivider} />
          </Stack>
        )}

        {/* Right side */}
        <Card background='#FFFFFF' boxShadow='base' width={isLarge ? '100%' : 'xl'}>
          <CardHeader>
            <Stack align='center' justify='center' spacing='0'>
              <Image
                height='8'
                objectFit='scale-down'
                objectPosition='center'
                src={logo}
                width='100%'
              />
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack
              align='center'
              direction={isLarge ? 'column' : 'row'}
              divider={<StackDivider />}
              justify='center'
              spacing='5'
              width='100%'
            >
              <Text
                color='gray.800'
                fontSize='md'
                textAlign='center'
                width={isLarge ? '100%' : '60'}
              >
                {description}
              </Text>

              <UnorderedList
                color='black'
                fontSize='md'
                listStylePos='inside'
                textAlign='center'
                width={isLarge ? '100%' : '60'}
              >
                {skills.map((value, index) => (
                  <ListItem key={index}>{value}</ListItem>
                ))}
              </UnorderedList>
            </Stack>
          </CardBody>
          <CardFooter justifyContent='flex-end'>{!!footer && footer}</CardFooter>
        </Card>
      </Stack>

      {/* Extra bottom divider */}
      {extraBottomDivider && !isLarge && (
        <HStack align='center' justify='center' spacing='20'>
          <Box width='64' />

          <Stack align='center' justify='center' spacing='0'>
            <Divider height='44' orientation='vertical' {...extraBottomDivider} />
          </Stack>

          <Box width='xl' />
        </HStack>
      )}
    </VStack>
  );
}
