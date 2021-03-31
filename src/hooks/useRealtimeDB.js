import { useContext } from "react";
import AppContext from "../context/AppContext";
import { db } from "../firebase/config";

const useRealtimeDB = () => {
  const { setImages } = useContext(AppContext);
  db.collection("images").onSnapshot((snapshot) => {
    const images = snapshot.docChanges().map((change) => change.doc.data());
    setImages(images);
  });
};

export default useRealtimeDB;
