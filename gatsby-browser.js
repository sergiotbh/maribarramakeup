import React from "react"
import AppProvider from "./src/context/app-context"
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)