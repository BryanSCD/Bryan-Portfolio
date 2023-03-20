import { useEffect, useMemo, useState } from 'react';
import { IoLogoChrome, IoLogoFigma, IoLogoGithub, IoLogoYoutube } from 'react-icons/io5';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  StackProps,
  UnorderedList,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ProjectsProps } from './Projects';

export type ImageLocation = 'left' | 'right';
export type ProjectsComponentCustomProps = {
  imageLocation: ImageLocation;
};

export type ProjectsComponentProps = ProjectsProps & ProjectsComponentCustomProps & StackProps;

export function ProjectsComponent({
  title,
  description,
  architecture,
  mainTechnologies,
  platform,
  imageLocation,
  githubURL,
  figmaURL,
  videoURL,
  websiteURL,
  showMe,
  mainHexColor,
  colorScheme,
  logoSrc,
  screenSrc,
  screenSrcOrientation,
  ...rest
}: ProjectsComponentProps) {
  const isMedium = useBreakpointValue(
    {
      base: true,
      lg: false,
    },
    { ssr: false },
  );

  const isLarge = useBreakpointValue(
    {
      base: true,
      xl: false,
    },
    { ssr: false },
  );

  const [cardVertical, setCardVertical] = useState(false);

  useEffect(() => {
    setCardVertical(screenSrcOrientation == 'vertical' ? !!isMedium : !!isLarge);
  }, [screenSrcOrientation, isMedium, isLarge]);

  const renderImage = useMemo(() => {
    return (
      <Image
        width={
          cardVertical
            ? screenSrcOrientation == 'vertical'
              ? '80%'
              : '95%'
            : screenSrcOrientation == 'vertical'
            ? '18rem'
            : '54rem'
        }
        height='auto'
        maxHeight={screenSrcOrientation == 'vertical' ? '34rem' : '31rem'}
        borderStyle='none'
        objectFit='contain'
        objectPosition={cardVertical ? 'center' : imageLocation == 'left' ? 'right' : 'left'}
        src={screenSrc}
        zIndex='20'
      />
    );
  }, [imageLocation, screenSrcOrientation, screenSrc, cardVertical]);

  const cardChildPaddingLeft = cardVertical ? '4' : imageLocation == 'left' ? '8' : '4';
  const cardChildPaddingRight = cardVertical ? '4' : imageLocation == 'right' ? '8' : '4';

  return (
    <Stack
      height='fit-content'
      spacing={!cardVertical ? '-8' : screenSrcOrientation == 'vertical' ? '-72' : '-20'}
      direction={cardVertical ? 'column' : 'row'}
      align='center'
      {...rest}
    >
      {((!cardVertical && imageLocation == 'left') || cardVertical) && renderImage}
      <Card
        size='sm'
        width={cardVertical ? '100%' : 'container.sm'}
        height='fit-content'
        borderRadius='2rem'
        overflow='hidden'
        bgColor={mainHexColor}
        color='white'
        zIndex='10'
        shadow='dark-lg'
      >
        <CardHeader pl={cardChildPaddingLeft} pr={cardChildPaddingRight}>
          <Heading
            fontSize='3xl'
            pt={!cardVertical ? '2.5' : screenSrcOrientation == 'vertical' ? '72' : '20'}
            px='2.5'
          >
            {title}
          </Heading>
        </CardHeader>
        <CardBody width='100%' pt='0' pl={cardChildPaddingLeft} pr={cardChildPaddingRight}>
          <VStack spacing='4' p='2.5'>
            <Box width='100%'>{description}</Box>

            <Stack
              spacing='4'
              width='100%'
              direction={cardVertical ? 'column' : 'row'}
              alignItems='center'
            >
              <UnorderedList fontSize='md' width='100%' listStylePos='inside' alignSelf='stretch'>
                <ListItem>
                  <strong>Architecture: </strong> {architecture}
                </ListItem>
                <ListItem>
                  <strong>Main technologies: </strong>
                  {mainTechnologies.join(', ')}
                </ListItem>
                <ListItem>
                  <strong>Platform: </strong>
                  {platform}
                </ListItem>
              </UnorderedList>

              <Image maxW='32' maxH='32' src={logoSrc} />
            </Stack>
          </VStack>
        </CardBody>
        <CardFooter
          bgColor='blackAlpha.400'
          py='0'
          pl={cardChildPaddingLeft}
          pr={cardChildPaddingRight}
        >
          <Flex
            justifyContent={cardVertical ? 'center' : 'flex-end'}
            width='100%'
            p='2.5'
            flexWrap='wrap'
          >
            {videoURL && (
              <Link href={videoURL} isExternal>
                <Button
                  variant='solid'
                  colorScheme='red'
                  size='md'
                  m='1'
                  leftIcon={<IoLogoYoutube />}
                >
                  Video
                </Button>
              </Link>
            )}
            {websiteURL && (
              <Link href={websiteURL} isExternal>
                <Button
                  variant='solid'
                  colorScheme={colorScheme}
                  size='md'
                  m='1'
                  leftIcon={<IoLogoChrome />}
                >
                  Website
                </Button>
              </Link>
            )}
            {githubURL && (
              <Link href={githubURL} isExternal>
                <Button
                  variant='solid'
                  colorScheme='gray'
                  color='black'
                  size='md'
                  m='1'
                  leftIcon={<IoLogoGithub />}
                >
                  Github
                </Button>
              </Link>
            )}
            {figmaURL && (
              <Link href={figmaURL} isExternal>
                <Button
                  variant='solid'
                  colorScheme='purple'
                  color='white'
                  size='md'
                  m='1'
                  leftIcon={<IoLogoFigma />}
                >
                  Figma
                </Button>
              </Link>
            )}
            {showMe && (
              <Button
                variant='solid'
                colorScheme={colorScheme}
                size='md'
                m='1'
                width={cardVertical ? '100%' : 'auto'}
              >
                Show me!
              </Button>
            )}
          </Flex>
        </CardFooter>
      </Card>

      {imageLocation == 'right' && !cardVertical && renderImage}
    </Stack>
  );
}
