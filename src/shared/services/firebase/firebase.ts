import { initializeApp } from 'firebase/app';
import { collection, getDocs, QuerySnapshot, getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { COLLECTION_NAME, FIREBASE_CONFIG } from '../../constants/firebase';
import { IProjectData } from '../../interfaces/projects';

const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);

export class FirebaseServices {
  static initializateServices = () => {
    return app;
  };

  static getAllProjects = async (): Promise<IProjectData[]> => {
    const querySnapshot: QuerySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as IProjectData[];
  };

  static getProject = async (id: string): Promise<IProjectData> => {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error('No such document!');
    }
    return { id: docSnap.id, ...docSnap.data() } as IProjectData;
  };

  static addProject = async (project: IProjectData): Promise<void> => {
    const docRef = doc(collection(db, COLLECTION_NAME));
    await setDoc(docRef, project);
  };
}
