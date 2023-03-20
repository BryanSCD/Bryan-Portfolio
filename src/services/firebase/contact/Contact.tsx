import { addDoc, collection } from 'firebase/firestore';
import ReactDOMServer from 'react-dom/server';

import { db } from '../firebase';
import ContactBody from './ContactHTMLBody';

export const addContact = (emailTo: string, name: string, email: string, message: string) =>
  new Promise<void>(async (resolve, reject) => {
    const contactBody = ReactDOMServer.renderToStaticMarkup(
      <ContactBody name={name} email={email} message={message} />,
    );

    try {
      await addDoc(collection(db, 'mail'), {
        to: emailTo,
        message: {
          subject: `New contact: ${name}!`,
          html: contactBody,
        },
      });
      resolve();
    } catch (e) {
      reject();
    }
  });
