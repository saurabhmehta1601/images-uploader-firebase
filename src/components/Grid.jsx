import Image from "./Image"

const Grid = ({images}) => {

    return (
        <div className="grid">
            {images.map((imageData,index)=><Image key={index} data={imageData} ></Image>)}
        </div>  
    )
}

export default Grid
