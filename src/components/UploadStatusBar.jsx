import React from 'react'

const UploadStatusBar = () => {
   const progress = 70 ;

    return (
        <div className="status-bar" style={{width:progress+"%"}}>
            {progress} %
            </div>
       
    )
}

export default UploadStatusBar
