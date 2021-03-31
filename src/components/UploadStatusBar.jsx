import React from 'react'
import { useContext } from 'react'
import ProgressContext from '../context/AppContext'

const UploadStatusBar = () => {
    const {progress} =useContext(ProgressContext)
    return (
        <div style={{width:"90%",paddingLeft:"5%"}}>
        <div className="status-bar" style={{width:progress+"%"}}>
        </div>
        <p className="progress-indicator">{progress ? progress+" % " : null } </p>
        </div>
    )
}
export default UploadStatusBar
