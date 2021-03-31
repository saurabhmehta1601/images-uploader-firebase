import React, { useState } from 'react'
import {db} from '../firebase/config'

const AppContext = React.createContext({})

export const AppContextProvider =({children})=> {
const [progress, setProgress] = useState(0)
const [images,setImages] = useState([])

return <AppContext.Provider value={{progress, setProgress,images,setImages}}>
        {children}
    </AppContext.Provider>}

export default AppContext