export interface ContactProps {
  github: string;
  linkedin: string;
  email: string;
  number: string;
  numberLabel: string;
  whatsappLink: string;
}

export const BryanContactDetails: ContactProps = {
  github: "https://github.com/BryanSCD",
  linkedin: "https://www.linkedin.com/in/bryansduran/",
  email: "bryanscduran@gmail.com",
  number: "+34695549791",
  numberLabel: "(+34) 695 54 97 91",
  whatsappLink:
    "https://api.whatsapp.com/send?phone=34695549791&text=Hey%20Bryan!",
};
