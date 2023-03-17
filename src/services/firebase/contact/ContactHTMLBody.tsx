import { FunctionComponent } from "react";

interface ContactBodyProps {
  name: string;
  email: string;
  message: string;
}

const ContactBody: FunctionComponent<ContactBodyProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <p>{message}</p>
    </>
  );
};

export default ContactBody;
