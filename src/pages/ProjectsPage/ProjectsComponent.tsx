import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  StackProps,
  Text,
  ThemeTypings,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";

export interface ProjectsProps {
  title: string;
  description: string;
  architecture: string;
  mainTechnologies: string[];
  logoSrc: string;
  screenSrc: string;
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
  imageLocation,
  imageOrientation,
  bgHexColor = "#FFFFFF",
  colorScheme = "purple",
  logoSrc,
  screenSrc,
  ...rest
}: ProjectsComponentProps) {
  const renderImage = useMemo(
    () => (
      <Image
        width={imageOrientation == "vertical" ? "72" : "container.sm"}
        height='100%'
        borderStyle='none'
        objectFit='cover'
        objectPosition={imageLocation == "left" ? "right" : "left"}
        src={screenSrc}
      />
    ),
    [imageOrientation, screenSrc]
  );
  return (
    <HStack
      height={imageOrientation == "vertical" ? "container.sm" : "md"}
      spacing='0'
      {...rest}
    >
      {imageLocation == "left" && renderImage}
      <Card
        size='sm'
        width='xl'
        height='fit-content'
        borderRightRadius={imageLocation == "left" ? "2rem" : "none"}
        borderLeftRadius={imageLocation == "right" ? "2rem" : "none"}
        overflow='hidden'
        bgColor={bgHexColor}
        color='white'
      >
        <CardHeader>
          <Heading fontSize='3xl' pt='2.5' px='2.5'>
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing='4' p='2.5'>
            <Text width='100%' fontSize='md' noOfLines={3}>
              {description}
            </Text>

            <HStack spacing='4' width='100%'>
              <Image minW='32' minH='32' src={logoSrc} />

              <UnorderedList
                fontSize='md'
                width='100%'
                listStylePos='inside'
                alignSelf='stretch'
              >
                <ListItem>
                  <strong>Architecture:</strong> {architecture}
                </ListItem>
                <ListItem>
                  <strong>Main technologies:</strong> {mainTechnologies}
                </ListItem>
              </UnorderedList>
            </HStack>
          </VStack>
        </CardBody>
        <CardFooter bgColor='blackAlpha.400'>
          <Flex justifyContent='flex-end' width='100%' p='2.5'>
            <Button variant='solid' colorScheme={colorScheme} size='sm'>
              Learn more
            </Button>
          </Flex>
        </CardFooter>
      </Card>

      {imageLocation == "right" && renderImage}
    </HStack>
  );
}
