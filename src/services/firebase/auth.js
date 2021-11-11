import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import "./initialize";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () =>
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    return { token, user };
  });

export const logout = () => signOut(auth);
