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
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";

function onSubmit(values: FieldValues): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 3000);
  });
}

function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <InputLeftElement children={<IoPersonOutline />} />
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
            <InputLeftElement children={<IoMailOutline />} />
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