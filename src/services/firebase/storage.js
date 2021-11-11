import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./initialize";

const storage = getStorage();

export const upload = (file) => {
  const storageRef = ref(storage, "cover_pages/" + file.name);

  return uploadBytes(storageRef, file);
};

export const download = (imageUrl) => getDownloadURL(ref(storage, imageUrl));
