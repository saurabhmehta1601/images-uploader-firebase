import React from 'react'

const UploadStatusBar = ( {progress} ) => {
    return (
        <div style={{width:"90%",paddingLeft:"5%"}}>
        <div className="status-bar" style={{width:progress+"%"}}>
        </div>
        </div>
    )
}
export default UploadStatusBar
