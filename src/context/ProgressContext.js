import React from 'react'

const ProgressContext = React.createContext(0)

export const ProgressProvider = ProgressContext.Provider
export const ProgressConsumer = ProgressContext.Consumer

export default ProgressContext