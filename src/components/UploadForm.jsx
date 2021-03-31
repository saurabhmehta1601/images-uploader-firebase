import { useState } from "react";
import { storage, db } from "../firebase/config";

const UploadForm = () => {
  const allowedExtentions = ["image/jpg", "image/png", "image/jpeg"];

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const f = e.target.files[0];

    if (f && allowedExtentions.includes(f.type)) {
      setError(null);
      // set file to be uploaded as selected one
      setFile(f);
    } else {
      // for invalid or not selecting image
      setFile(null);
      setError("Choose an image file");
    }
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    // uploading to firebase storage
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
        setError(err);
      },
      () => {
        //   upon successfully uploading to store get downloadlink to store in firestore
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            // add document to firestore with the download link we get after uploading image to store
            db
            .collection("images")
            .add({
              imageURL: fireBaseUrl,
              name: file.name,
            })
            .then((docRef) => console.log("Document written with id ", docRef))
            .catch((e) => console.log(e));

          });
      }
    );
    setFile(null);
  };

  return (
    <form id="upload-form" onSubmit={handleSubmit}>
      {/* upload file input */}
      <input type="file" id="file-upload" onChange={handleChange} hidden />
      <label htmlFor="file-upload">
        <img
          className="upload-icon"
          src="https://img.icons8.com/color/48/000000/upload--v1.png"
          alt="upload file "
        />
      </label>
      {file?.name}
      {error}
      {file && (
        <button type="submit" className="upload-btn">
          Upload
        </button>
      )}
    </form>
  );
};

export default UploadForm;
