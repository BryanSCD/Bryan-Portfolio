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
    <Card width={isMedium ? '100%' : '40%'} shadow='dark-lg' {...rest}>
      <CardBody px={isMedium ? '6' : '12'} py={isMedium ? '10' : '16'}>
        <VStack>
          <Stack
            direction={isMedium ? 'column' : 'row'}
            spacing={isMedium ? '4' : '8'}
            align='center'
          >
            {imageSrc && (
              <Image
                width={isMedium ? '100%' : '48'}
                height={isMedium ? '32' : '48'}
                src={imageSrc}
                objectPosition='center'
                objectFit='scale-down'
              />
            )}
            <VStack spacing='2.5'>
              <Heading fontSize={isMedium ? '2xl' : '3xl'} textAlign='center'>
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
