import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  StackProps,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export interface StudiesProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export type ProjectsComponentProps = StudiesProps & StackProps;

export function StudiesComponent({
  imageSrc,
  title,
  subtitle,
  children,
  ...rest
}: ProjectsComponentProps) {
  const isMedium = useBreakpointValue({ base: true, lg: false }, { ssr: false });
  return (
    <Card shadow='dark-lg' width={isMedium ? '100%' : '40%'} {...rest}>
      <CardBody px={isMedium ? '6' : '12'} py={isMedium ? '10' : '16'}>
        <VStack>
          <Stack
            align='center'
            direction={isMedium ? 'column' : 'row'}
            spacing={isMedium ? '4' : '8'}
          >
            {imageSrc && (
              <Image
                height={isMedium ? '32' : '48'}
                objectFit='scale-down'
                objectPosition='center'
                src={imageSrc}
                width={isMedium ? '100%' : '48'}
              />
            )}
            <VStack spacing='2.5'>
              <Heading fontSize={isMedium ? '2xl' : '3xl'} textAlign='center'>
                {title}
              </Heading>
              {subtitle && (
                <Heading fontSize='md' pb='2.5' textAlign='center'>
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
