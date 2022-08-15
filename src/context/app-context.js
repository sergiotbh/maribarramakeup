import React, { useContext, useReducer } from 'react';

export const AppContext = React.createContext()

export const useAppContext = () => useContext(AppContext)

const initialState = {
  offsetY: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "OFFSET_CHANGE":
      return {...state, offsetY: action.value};  
    default:
      return state
  }
}

const AppProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <AppContext.Provider
      value={{
        offsetY: state.offsetY,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;