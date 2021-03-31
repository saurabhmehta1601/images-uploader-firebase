import React, { useEffect, useState } from 'react'

const Grid = ({images}) => {
    console.log("images passed are ",images);
    
    return (
        <div className="grid">
            {images.map(image=><><img src={image.imageURL} alt="grid" /> <p>
                    {image.name}
                    </p> </>)}
        </div>  
    )
}

export default Grid
