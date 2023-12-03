import {db} from '@/firebase/firebase';
import {doc, getDoc} from 'firebase/firestore';

const Homepage = () => {
  const docRef = doc(db, "selections")
  const docSnap =  async () => { await getDoc(docRef) }
  if(docSnap.exists()) {
    console.log(docSnap.data())
  }
  return <div className="text-entertainment-greyish-blue">Homepage</div>;
};

export default Homepage;
