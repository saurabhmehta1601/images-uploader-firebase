
const UploadForm = () => {

    return (
        <form id="upload-form">
           
           {/* upload file input */}
            <input type="file" name="" id="file-upload" hidden/>
            <label  htmlFor="file-upload">
            <img class="upload-icon" src="https://img.icons8.com/color/48/000000/upload--v1.png" alt="upload file " />
            </label>
        </form>
    )
}

export default UploadForm
