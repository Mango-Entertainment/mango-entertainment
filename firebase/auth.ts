import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  User
} from "firebase/auth";

import {auth} from "@/firebase/firebase";

export function onAuthStateChanged(cb: (arg0: User) => void) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
