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
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  IoLogoChrome,
  IoLogoFigma,
  IoLogoGithub,
  IoLogoYoutube
} from "react-icons/io5";
import { ProjectsProps } from "./Projects";

export type ImageLocation = "left" | "right";
export type ProjectsComponentCustomProps = {
  imageLocation: ImageLocation;
};

export type ProjectsComponentProps = ProjectsProps &
  ProjectsComponentCustomProps &
  StackProps;

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
    { ssr: false }
  );

  const isExtraLarge = useBreakpointValue(
    {
      base: false,
      xl: true,
    },
    { ssr: false }
  );

  const cardHorizontal =
    screenSrcOrientation == "vertical" ? !!isMedium : !isExtraLarge;

  const renderImage = useMemo(() => {
    return (
      <Image
        width={
          cardHorizontal
            ? screenSrcOrientation == "vertical"
              ? "80%"
              : "95%"
            : screenSrcOrientation == "vertical"
            ? "18rem"
            : "48rem"
        }
        height={
          cardHorizontal
            ? "auto"
            : screenSrcOrientation == "vertical"
            ? "34rem"
            : "31rem"
        }
        maxHeight={screenSrcOrientation == "vertical" ? "34rem" : "31rem"}
        borderStyle='none'
        objectFit='contain'
        objectPosition={
          cardHorizontal ? "center" : imageLocation == "left" ? "right" : "left"
        }
        src={screenSrc}
        zIndex='20'
      />
    );
  }, [imageLocation, screenSrcOrientation, screenSrc, cardHorizontal]);

  return (
    <Stack
      height='fit-content'
      spacing={
        !cardHorizontal ? "-5" : screenSrcOrientation == "vertical" ? "-72" : "-20"
      }
      direction={cardHorizontal ? "column" : "row"}
      align='center'
      {...rest}
    >
      {((!cardHorizontal && imageLocation == "left") || cardHorizontal) &&
        renderImage}
      <Card
        size='sm'
        width={cardHorizontal ? "100%" : "container.sm"}
        height='fit-content'
        borderRightRadius={
          imageLocation == "left" || cardHorizontal ? "2rem" : "none"
        }
        borderLeftRadius={
          imageLocation == "right" || cardHorizontal ? "2rem" : "none"
        }
        overflow='hidden'
        bgColor={mainHexColor}
        color='white'
        zIndex='10'
        pl={cardHorizontal ? "0" : imageLocation == "left" ? "4" : "0"}
        pr={cardHorizontal ? "0" : imageLocation == "right" ? "4" : "0"}
      >
        <CardHeader>
          <Heading
            fontSize='3xl'
            pt={
              !cardHorizontal
                ? "2.5"
                : screenSrcOrientation == "vertical"
                ? "72"
                : "20"
            }
            px='2.5'
          >
            {title}
          </Heading>
        </CardHeader>
        <CardBody width='100%'>
          <VStack spacing='4' p='2.5'>
            <Box width='100%'>{description}</Box>

            <Stack
              spacing='4'
              width='100%'
              direction={cardHorizontal ? "column" : "row"}
              alignItems='center'
            >
              <UnorderedList
                fontSize='md'
                width='100%'
                listStylePos='inside'
                alignSelf='stretch'
              >
                <ListItem>
                  <strong>Architecture: </strong> {architecture}
                </ListItem>
                <ListItem>
                  <strong>Main technologies: </strong>
                  {mainTechnologies.join(", ")}
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
        <CardFooter bgColor='blackAlpha.400' p='0'>
          <Flex
            justifyContent={cardHorizontal ? "center" : "flex-end"}
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
                  Github
                </Button>
              </Link>
            )}
            {showMe && (
              <Button
                variant='solid'
                colorScheme={colorScheme}
                size='md'
                m='1'
                width={cardHorizontal ? "100%" : "auto"}
              >
                Show me!
              </Button>
            )}
          </Flex>
        </CardFooter>
      </Card>

      {imageLocation == "right" && !cardHorizontal && renderImage}
    </Stack>
  );
}
