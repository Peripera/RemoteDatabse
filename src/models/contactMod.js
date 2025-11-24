import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebaseConf'; //here we

const COLLECTION_NAME = 'contacts';
export async function createContact(contact) {
  const ref = collection(db, COLLECTION_NAME);
  const docRef = await addDoc(ref, {
    ...contact,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export function subscribeToContacts(onData, onError) {
  const ref = collection(db, COLLECTION_NAME);
  const q = query(ref, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onData(items);
    },
    (error) => {
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}
