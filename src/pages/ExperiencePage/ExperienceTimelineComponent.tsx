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
        <HStack justify='center' align='center' spacing='20'>
          <Box width='64'></Box>

          <Stack justify='center' align='center' spacing='0'>
            <Divider orientation='vertical' height='44' {...extraUpperDivider} />
          </Stack>

          <Box width='xl'></Box>
        </HStack>
      )}

      {/* Dot divider */}
      <Stack
        direction={isLarge ? 'column' : 'row'}
        justify='center'
        align='center'
        spacing='20'
        width='100%'
      >
        <VStack justify='flex-start' align='center' spacing='4' width={isLarge ? '70%' : '64'}>
          <Heading fontSize='xl' color='white' textAlign='center'>
            {title}
          </Heading>
          <Text fontSize='md' color='whiteAlpha.800' textAlign='center'>
            {subtitle}
          </Text>
        </VStack>

        {!isLarge && (
          <Stack justify='center' align='center' spacing='0'>
            <Divider orientation='vertical' height='44' {...upperDivider} />
            <Circle size='8' background='white' {...circleProps} />
            <Divider orientation='vertical' height='44' {...bottomDivider} />
          </Stack>
        )}

        <Card background='#FFFFFF' boxShadow='base' width={isLarge ? '100%' : 'xl'}>
          <CardHeader>
            <Stack justify='center' align='center' spacing='0'>
              <Image
                width='100%'
                height='8'
                src={logo}
                objectFit='scale-down'
                objectPosition='center'
              />
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack
              direction={isLarge ? 'column' : 'row'}
              justify='center'
              align='center'
              spacing='5'
              width='100%'
              divider={<StackDivider />}
            >
              <Text
                fontSize='md'
                color='gray.800'
                width={isLarge ? '100%' : '60'}
                textAlign='center'
              >
                {description}
              </Text>

              <UnorderedList
                fontSize='md'
                color='black'
                width={isLarge ? '100%' : '60'}
                textAlign='center'
                listStylePos='inside'
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
        <HStack justify='center' align='center' spacing='20'>
          <Box width='64'></Box>

          <Stack justify='center' align='center' spacing='0'>
            <Divider orientation='vertical' height='44' {...extraBottomDivider} />
          </Stack>

          <Box width='xl'></Box>
        </HStack>
      )}
    </VStack>
  );
}
