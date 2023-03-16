import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  StackProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export interface StudiesProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export interface StudiesComponentCustomProps {}

export type ProjectsComponentProps = StudiesProps &
  StudiesComponentCustomProps &
  StackProps;

export function StudiesComponent({
  imageSrc,
  title,
  subtitle,
  children,
  ...rest
}: ProjectsComponentProps) {
  const isSmall = useBreakpointValue({ base: true, md: false });
  return (
    <Card width={isSmall ? '100%' : 'container.sm'} {...rest}>
      <CardBody px={isSmall ? "6" : "12"} py={isSmall ? "10" : "16"}>
        <VStack>
          <Stack
            direction={isSmall ? "column" : "row"}
            spacing={isSmall ? "4" : "8"}
            align='center'
          >
            {imageSrc && (
              <Image
                width={isSmall ? "100%" : "48"}
                height={isSmall ? "32" : "48"}
                src={imageSrc}
                objectPosition='center'
                objectFit='scale-down'
              />
            )}
            <VStack spacing='2.5'>
              <Heading fontSize={isSmall ? '2xl' : '3xl'} textAlign='center'>
                {title}
              </Heading>
              {subtitle && (
                <Heading fontSize='md' textAlign='center' pb='2.5'>
                  {subtitle}
                </Heading>
              )}
              {children}
            </VStack>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
}
