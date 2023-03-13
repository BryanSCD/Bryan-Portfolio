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
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Card width={isMobile ? '100%' : 'container.sm'} {...rest}>
      <CardBody px={isMobile ? "6" : "12"} py={isMobile ? "10" : "16"}>
        <VStack>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? "4" : "8"}
            align='center'
          >
            {imageSrc && (
              <Image
                width={isMobile ? "100%" : "48"}
                height={isMobile ? "32" : "48"}
                src={imageSrc}
                objectPosition='center'
                objectFit='scale-down'
              />
            )}
            <VStack spacing='2.5'>
              <Heading fontSize={isMobile ? '2xl' : '3xl'} textAlign='center'>
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
