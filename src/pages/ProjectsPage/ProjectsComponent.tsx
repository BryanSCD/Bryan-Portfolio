import {
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
  Text,
  ThemeTypings,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import {
  IoApps,
  IoLogoChrome,
  IoLogoGithub,
  IoLogoWebComponent,
  IoLogoYoutube,
} from "react-icons/io5";

export interface ProjectsProps {
  title: string;
  description: string;
  architecture: string;
  mainTechnologies: string[];
  platforms: string[];
  logoSrc: string;
  screenSrc: string;
  githubURL?: string;
  videoURL?: string;
  websiteURL?: string;
  showMe?: boolean;
}

export type ImageLocation = "left" | "right";

export type ImageOrientation = "vertical" | "horizontal";

export interface ProjectsComponentCustomProps {
  imageLocation: ImageLocation;
  imageOrientation: ImageOrientation;
  bgHexColor?: string;
  colorScheme?: ThemeTypings["colorSchemes"];
}

export type ProjectsComponentProps = ProjectsProps &
  ProjectsComponentCustomProps &
  StackProps;

export function ProjectsComponent({
  title,
  description,
  architecture,
  mainTechnologies,
  platforms,
  imageLocation,
  imageOrientation,
  githubURL,
  videoURL,
  websiteURL,
  showMe,
  bgHexColor = "#FFFFFF",
  colorScheme = "purple",
  logoSrc,
  screenSrc,
  ...rest
}: ProjectsComponentProps) {
  const isMedium = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
  });

  const isExtraLarge = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

  const cardHorizontal =
    imageOrientation == "vertical" ? !!isMedium : !isExtraLarge;

  console.log("render");

  const renderImage = useMemo(() => {
    return (
      <Image
        width={
          cardHorizontal
            ? imageOrientation == "vertical"
              ? "80%"
              : "95%"
            : imageOrientation == "vertical"
            ? "18rem"
            : "48rem"
        }
        height={
          cardHorizontal
            ? "auto"
            : imageOrientation == "vertical"
            ? "34rem"
            : "31rem"
        }
        borderStyle='none'
        objectFit='contain'
        objectPosition={
          cardHorizontal ? "center" : imageLocation == "left" ? "right" : "left"
        }
        src={screenSrc}
        zIndex='20'
      />
    );
  }, [cardHorizontal]);

  return (
    <Stack
      height='fit-content'
      spacing={
        !cardHorizontal ? "-5" : imageOrientation == "vertical" ? "-72" : "-20"
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
        bgColor={bgHexColor}
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
                : imageOrientation == "vertical"
                ? "72"
                : "20"
            }
            px='2.5'
          >
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing='4' p='2.5'>
            <Text width='100%' fontSize='md' noOfLines={cardHorizontal ? 0 : 4}>
              {description}
            </Text>

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
                  <strong>Platforms: </strong>
                  {platforms.join(", ")}
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
