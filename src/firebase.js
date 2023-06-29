import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrPi7xzocoycRep3PGgFpj5CEx5iaonks",
  authDomain: "blog-20a82.firebaseapp.com",
  projectId: "blog-20a82",
  storageBucket: "blog-20a82.appspot.com",
  messagingSenderId: "58304201829",
  appId: "1:58304201829:web:3abc4417dbf690e8bc328c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
