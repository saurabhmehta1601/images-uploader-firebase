import React, { useEffect, useRef, useState } from 'react'

const UploadStatusBar = () => {
    const [progress, setProgress] = useState(100) 

    let IntervalRef  = useRef(null); 

    return (
        <div className="status-bar" style={{width:progress+"%"}}>
            {progress} %
            </div>
       
    )
}

export default UploadStatusBar
