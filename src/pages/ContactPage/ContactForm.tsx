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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { addContact } from "../../services/firebase";

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
  } = useForm({ mode: "onChange" });

  const toast = useToast();

  const onSubmitForm = (values: FieldValues): Promise<void> => {
    return new Promise<void>((resolve) => {
      const formValues = values as formValues;
      addContact(formValues.name, formValues.email, formValues.message)
        .then(() => {
          {
            toast({
              title: "Message sent!",
              description: "I will contact you as soon as posible!",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            resolve();
          }
        })
        .catch(() => {
          toast({
            title: "This is frustrating... Something went wrong",
            description:
              "Highly probably I forgot something. Please, contact me through other way!",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          resolve();
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <VStack
        padding='4'
        spacing='2.5'
        width='100%'
        align='start'
        color='white'
      >
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel fontSize='md' htmlFor='name'>
            Your name / Your company
          </FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IoPersonOutline />
            </InputLeftElement>
            <Input
              type='text'
              focusBorderColor='#665cb2'
              id='name'
              autoComplete='name'
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3",
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {!!errors.name && errors.name.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel fontSize='md'>Email</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <IoMailOutline />
            </InputLeftElement>
            <Input
              type='email'
              focusBorderColor='#665cb2'
              id='email'
              autoComplete='email'
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {!!errors.email && errors.email.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel fontSize='md'>Message</FormLabel>
          <Textarea
            placeholder='Hey Bryan!'
            focusBorderColor='#665cb2'
            id='message'
            {...register("message", {
              required:
                "Write me something! I'm not a monster, believe me. (min. 10 characters)",
              minLength: {
                value: 10,
                message:
                  "Write me something longer! It's not that difficult. (min. 10 characters)",
              },
            })}
            resize='none'
            height='9rem'
          />
          <FormErrorMessage>
            {!!errors.message && errors.message.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <Flex height='100%' width='100%' justifyContent='end'>
          <Button
            color='white'
            bgColor='whiteAlpha.500'
            colorScheme='purple'
            type='submit'
            isLoading={isSubmitting}
            isDisabled={!isDirty || !isValid || isSubmitting}
          >
            Send message!
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default ContactForm;
