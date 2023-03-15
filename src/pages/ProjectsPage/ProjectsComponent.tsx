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
import { useMemo } from "react";
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
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderImage = useMemo(
    () => (
      <Image
        width={
          isMobile
            ? imageOrientation == "vertical"
              ? "80%"
              : "95%"
            : imageOrientation == "vertical"
            ? "18rem"
            : "48rem"
        }
        height={
          isMobile ? "auto" : imageOrientation == "vertical" ? "34rem" : "31rem"
        }
        borderStyle='none'
        objectFit='contain'
        objectPosition={
          isMobile ? "center" : imageLocation == "left" ? "right" : "left"
        }
        src={screenSrc}
        zIndex='20'
      />
    ),
    [imageOrientation, screenSrc, isMobile]
  );
  return (
    <Stack
      height='fit-content'
      spacing={
        !isMobile ? "-5" : imageOrientation == "vertical" ? "-72" : "-20"
      }
      direction={isMobile ? "column" : "row"}
      align='center'
      {...rest}
    >
      {((!isMobile && imageLocation == "left") || isMobile) && renderImage}
      <Card
        size='sm'
        width={isMobile ? "100%" : "container.sm"}
        height='fit-content'
        borderRightRadius={
          imageLocation == "left" || isMobile ? "2rem" : "none"
        }
        borderLeftRadius={
          imageLocation == "right" || isMobile ? "2rem" : "none"
        }
        overflow='hidden'
        bgColor={bgHexColor}
        color='white'
        zIndex='10'
        pl={isMobile ? "0" : imageLocation == "left" ? "4" : "0"}
        pr={isMobile ? "0" : imageLocation == "right" ? "4" : "0"}
      >
        <CardHeader>
          <Heading
            fontSize='3xl'
            pt={
              !isMobile ? "2.5" : imageOrientation == "vertical" ? "72" : "20"
            }
            px='2.5'
          >
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing='4' p='2.5'>
            <Text width='100%' fontSize='md' noOfLines={isMobile ? 0 : 4}>
              {description}
            </Text>

            <Stack
              spacing='4'
              width='100%'
              direction={isMobile ? "column" : "row"}
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
            justifyContent={isMobile ? "center" : "flex-end"}
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
                width={isMobile ? "100%" : "auto"}
              >
                Show me!
              </Button>
            )}
          </Flex>
        </CardFooter>
      </Card>

      {imageLocation == "right" && !isMobile && renderImage}
    </Stack>
  );
}
