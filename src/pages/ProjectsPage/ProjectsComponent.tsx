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
        borderStyle='none'
        height='auto'
        maxHeight={screenSrcOrientation == 'vertical' ? '34rem' : '31rem'}
        objectFit='contain'
        objectPosition={cardVertical ? 'center' : imageLocation == 'left' ? 'right' : 'left'}
        src={screenSrc}
        width={
          cardVertical
            ? screenSrcOrientation == 'vertical'
              ? '80%'
              : '95%'
            : screenSrcOrientation == 'vertical'
            ? '18rem'
            : '54rem'
        }
        zIndex='20'
      />
    );
  }, [imageLocation, screenSrcOrientation, screenSrc, cardVertical]);

  const cardChildPaddingLeft = cardVertical ? '4' : imageLocation == 'left' ? '8' : '4';
  const cardChildPaddingRight = cardVertical ? '4' : imageLocation == 'right' ? '8' : '4';

  return (
    <Stack
      align='center'
      direction={cardVertical ? 'column' : 'row'}
      height='fit-content'
      spacing={!cardVertical ? '-8' : screenSrcOrientation == 'vertical' ? '-72' : '-20'}
      {...rest}
    >
      {((!cardVertical && imageLocation == 'left') || cardVertical) && renderImage}
      <Card
        bgColor={mainHexColor}
        borderRadius='2rem'
        color='white'
        height='fit-content'
        overflow='hidden'
        shadow='dark-lg'
        size='sm'
        width={cardVertical ? '100%' : 'container.sm'}
        zIndex='10'
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
        <CardBody pl={cardChildPaddingLeft} pr={cardChildPaddingRight} pt='0' width='100%'>
          <VStack p='2.5' spacing='4'>
            <Box width='100%'>{description}</Box>

            <Stack
              alignItems='center'
              direction={cardVertical ? 'column' : 'row'}
              spacing='4'
              width='100%'
            >
              <UnorderedList alignSelf='stretch' fontSize='md' listStylePos='inside' width='100%'>
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

              <Image maxH='32' maxW='32' src={logoSrc} />
            </Stack>
          </VStack>
        </CardBody>
        <CardFooter
          bgColor='blackAlpha.400'
          pl={cardChildPaddingLeft}
          pr={cardChildPaddingRight}
          py='0'
        >
          <Flex
            flexWrap='wrap'
            justifyContent={cardVertical ? 'center' : 'flex-end'}
            p='2.5'
            width='100%'
          >
            {videoURL && (
              <Link href={videoURL} isExternal>
                <Button
                  colorScheme='red'
                  leftIcon={<IoLogoYoutube />}
                  m='1'
                  size='md'
                  variant='solid'
                >
                  Video
                </Button>
              </Link>
            )}
            {websiteURL && (
              <Link href={websiteURL} isExternal>
                <Button
                  colorScheme={colorScheme}
                  leftIcon={<IoLogoChrome />}
                  m='1'
                  size='md'
                  variant='solid'
                >
                  Website
                </Button>
              </Link>
            )}
            {githubURL && (
              <Link href={githubURL} isExternal>
                <Button
                  color='black'
                  colorScheme='gray'
                  leftIcon={<IoLogoGithub />}
                  m='1'
                  size='md'
                  variant='solid'
                >
                  Github
                </Button>
              </Link>
            )}
            {figmaURL && (
              <Link href={figmaURL} isExternal>
                <Button
                  color='white'
                  colorScheme='purple'
                  leftIcon={<IoLogoFigma />}
                  m='1'
                  size='md'
                  variant='solid'
                >
                  Figma
                </Button>
              </Link>
            )}
            {showMe && (
              <Button
                colorScheme={colorScheme}
                m='1'
                size='md'
                variant='solid'
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
