import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import Grid from "./Grid";

const ImageGrid = () => {
 
    const [images, setImages] = useState([])

  useEffect(() => {
      console.log("db is ",db)
      db
      .collection("images")
      .get()
      .then( snapshot => {
          const data= snapshot.docs.map((doc) => doc.data()) 
         setImages(data)
        });
    // setImages(data)
  }, []);

  return (
    <>
      <h2 className="heading">Image Gallery</h2>
      <Grid images={images} />
    </>
  );
};

export default ImageGrid;
