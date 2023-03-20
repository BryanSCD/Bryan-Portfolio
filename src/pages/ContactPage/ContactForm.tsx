import { FieldValues, useForm } from 'react-hook-form';
import { IoMailOutline, IoPersonOutline } from 'react-icons/io5';

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';

import { addContact } from '../../services/firebase';
import { BryanContactDetails } from './ContactDetails';

interface formValues {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const toast = useToast();

  const onSubmitForm = (values: FieldValues): Promise<void> => {
    return new Promise<void>((resolve) => {
      const formValues = values as formValues;
      addContact(BryanContactDetails.email, formValues.name, formValues.email, formValues.message)
        .then(() => {
          {
            toast({
              title: 'Message sent!',
              description: 'I will contact you as soon as posible!',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
            resolve();
          }
        })
        .catch(() => {
          toast({
            title: 'This is embarrasing... Something went wrong',
            description:
              'Highly probably I run out of money to support this webpage. Please, contact me through other way!',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
          resolve();
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <VStack align='start' color='white' padding='4' spacing='2.5' width='100%'>
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel fontSize='md' htmlFor='name'>
            Your name / Your company
          </FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IoPersonOutline />
            </InputLeftElement>
            <Input
              autoComplete='name'
              focusBorderColor='#665cb2'
              id='name'
              type='text'
              {...register('name', {
                required: 'This is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length should be 3',
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>{!!errors.name && errors.name.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel fontSize='md'>Email</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IoMailOutline />
            </InputLeftElement>
            <Input
              autoComplete='email'
              focusBorderColor='#665cb2'
              id='email'
              type='email'
              {...register('email', {
                required: 'This is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>{!!errors.email && errors.email.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel fontSize='md'>Message</FormLabel>
          <Textarea
            focusBorderColor='#665cb2'
            id='message'
            placeholder='Hey Bryan!'
            {...register('message', {
              required: "Write me something! I'm not a monster, believe me. (min. 10 characters)",
              minLength: {
                value: 10,
                message: "Write me something longer! It's not that difficult. (min. 10 characters)",
              },
            })}
            height='9rem'
            resize='none'
          />
          <FormErrorMessage>
            {!!errors.message && errors.message.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <Flex height='100%' justifyContent='end' width='100%'>
          <Button
            bgColor='whiteAlpha.500'
            color='white'
            colorScheme='purple'
            isDisabled={!isDirty || !isValid || isSubmitting}
            isLoading={isSubmitting}
            type='submit'
          >
            Send message!
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default ContactForm;
