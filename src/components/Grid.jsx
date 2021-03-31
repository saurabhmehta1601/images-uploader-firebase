import React, { useEffect, useState } from 'react'
import Image from "./Image"

const Grid = ({images}) => {
    console.log("images passed are ",images);

    return (
        <div className="grid">
            {images.map(imageData=><Image data={imageData} ></Image>)}
        </div>  
    )
}

export default Grid
