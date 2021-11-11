import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

export const saveDocument = (collectionName, document) =>
  addDoc(collection(db, collectionName), document);

export async function getDocuments(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
}
