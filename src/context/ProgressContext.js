import React, { useState } from 'react'


const ProgressContext = React.createContext({})

export const ProgressProvider =({children})=> {

const [progress, setProgress] = useState(0)
return <ProgressContext.Provider value={{progress, setProgress}}>
        {children}
    </ProgressContext.Provider>}

export default ProgressContext