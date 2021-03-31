import Grid from "./Grid";
import useRealtimeDB from "../hooks/useRealtimeDB"
import { useContext } from "react";
import AppContext from "../context/AppContext";

// real time database update


const ImageGrid = () => {
  useRealtimeDB()
  const {images} =useContext(AppContext)
  return (
    <>
      <h2 className="heading">Image Gallery</h2>
      <Grid images={images} />
    </>
  );
};

export default ImageGrid;
