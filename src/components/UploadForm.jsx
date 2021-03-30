import {  useState } from "react"


const UploadForm = () => {
    const allowedExtentions=["image/jpg","image/png","image/jpeg"]

    const [file, setFile] = useState(null)
    const [error,setError] =useState(null)
    

    const handleChange = (e) => {

        const f =e.target.files[0]

        if(f && allowedExtentions.includes(f.type) ){

            setError(null)
            // set file to be uploaded as selected one
             setFile(f)
        }else{
            // for invalid or not selecting image
            setFile(null)
            setError("Choose an image file")
        }

    }

    return (
        <form id="upload-form">
           {/* upload file input */}
            <input type="file"  id="file-upload" onChange={handleChange} hidden/>
            <label  htmlFor="file-upload">
            <img className="upload-icon" src="https://img.icons8.com/color/48/000000/upload--v1.png" alt="upload file " />
            </label>
            {error}
            {
            file && <button type="submit" className="upload-btn">
                Upload
            </button>
            }
        </form>
    )
}

export default UploadForm
