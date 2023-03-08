import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  StackProps,
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
  return (
    <Card width='container.sm' {...rest}>
      <CardBody px='12' py='16'>
        <VStack>
          <HStack spacing='8'>
            {imageSrc && (
              <Image
                width='52'
                height='52'
                src={imageSrc}
                objectPosition='center'
              />
            )}
            <VStack spacing='2.5'>
              <Heading fontSize='3xl' textAlign='center'>
                {title}
              </Heading>
              {subtitle && (
                <Heading fontSize='md' textAlign='center' pb='2.5'>
                  {subtitle}
                </Heading>
              )}
              {children}
            </VStack>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
