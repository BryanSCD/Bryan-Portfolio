import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addContact = (name: string, email: string, message: string) =>
  new Promise<void>(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "todos"), {
        name,
        email,
        message,
      });
      resolve();
    } catch (e) {
      reject();
    }
  });
